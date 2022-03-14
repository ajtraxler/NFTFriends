import { User, NFTEvent } from '../model/models';
import { UserType } from '../types';
import { Response, Request } from 'express';

// Start moralis
import Moralis from 'moralis/node';
const serverUrl: string = "https://eyeteqg5af1y.usemoralis.com:2053/server";
const appId:string = "UP1pIX52iA03bkolFJVtcRzCP7sxDsX5CY899Skl";
Moralis.start({ serverUrl, appId });

// if user exists, finds the user and sets the sessionID
export const findExistingUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const eth_address: string = req.params.eth_address;
    const user: UserType | null = await User.findOne({ eth_address: eth_address });
    if (user) {
      req.sessionID = user.eth_address;
    }
    res.status(200);
    res.send(JSON.stringify(user));
  }
  catch (err) {
    console.log("error with getDBEthaddresses", err);
    res.status(500);
    res.end();
  }
}

//if eth_adress not in DB yet, add to DB
export const postNewUser = async (req: Request, res: Response) => {
  try {
    const eth_address: string = req.params.eth_address;
    // console.log(req.params) //remove nft_groups later
    // console.log({ eth_address });
    const newUser = await User.create({ eth_address: eth_address });
    req.session.userId = newUser.eth_address;
    res.send(JSON.stringify(newUser));
    res.status(201);
    return JSON.stringify(newUser);
  }
  catch (err) {
    console.log(err, "error");
    console.log(500);
    res.end();
  }
}



//if eth adress in DB, update NFT holdings (completely replace?)
export const updateNFTCollection = async (req: Request, res: Response) => {
  try {
    const nft_groups: string[] = [];
    const { eth_address } = req.params;
    const options = { address: eth_address }

    //make NFT API call
    //const newNFTList = await getNfts(eth_address);

    const nfts = await Moralis.Web3API.account.getNFTs(options);
    for (let nft of nfts.result) {
      if (!nft_groups.includes(nft.name)) {
        nft_groups.push(nft.name);
      }
    }

    //filter by which to find
    const filter = { eth_address: eth_address.toLowerCase() };
    const update = { nft_groups };
    const user = await User.findOneAndUpdate(filter, update, { new: true });
    res.send(user);
    res.status(204);
  }
  catch (err) {
    console.log(err);
  }
}


//this is for mock video so u can add different users attending and posting different events...

export const postFakeUser = async (req: Request, res: Response) => {
  try {
    console.log('in post')
    const { eth_address, nft_groups } = req.body; //remove nft_groups later
    const newUser = await User.create({ eth_address: eth_address, nft_groups: nft_groups });
    req.session.userId = newUser.eth_address;
    console.log(req.session)
    res.send(newUser);
    res.status(201);
    return newUser;
  }
  catch (err) {
    console.log(err, "error");
    console.log(500);
    res.end();
  }
}


