const { User, NFTEvent } = require('../model/models.ts');
//const { getNfts } = require("./controller.nfts.moralis.js");

// Start moralis
const Moralis = require('moralis/node');
const serverUrl = "https://eyeteqg5af1y.usemoralis.com:2053/server";
const appId = "UP1pIX52iA03bkolFJVtcRzCP7sxDsX5CY899Skl";
Moralis.start({ serverUrl, appId });

//get ethAdresses from UserDB
const getDBEthAddresses = async (req, res) => {
  try {
    console.log('we are in get DBETH serverside');
    const { eth_address } = req.params;
    console.log(req.params);
    const user = await User.findOne({ eth_address: eth_address });
    if (user) {
      req.session.userId = user.eth_address;
    }
    res.send(JSON.stringify(user));
    res.status(200);
    return JSON.stringify(user);
  }
  catch (err) {
    console.log("error getdbaddress", err);
    res.status(500);
    res.end();
  }
}

//if eth_adress not in DB yet, add to DB
const postNewUser = async (req, res) => {
  try {
    const { eth_address } = req.params;
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
const updateNFTCollection = async (req, res) => {
  try {
    nft_groups = [];
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

const postFakeUser = async (req, res) => {
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

module.exports = { getDBEthAddresses, postNewUser, updateNFTCollection, postFakeUser };

