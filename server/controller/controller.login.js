const { User, Event } = require('../model/models.js');
const getNfts = require("./controller.nfts.js");

//get ethAdresses from UserDB
const getDBEthAddresses = async (req, res) => {
  try {
    const { eth_address } = req.body;
    const user = await User.findById({ eth_address: eth_address });
    if (user) {
      req.session.userId = user._id;
    }
    res.send(user);
    res.status(200);
    return user;
  }
  catch (err) {
    console.log("error", err);
    res.end();
  }
}

//if eth_adress not in DB yet, add to DB
const postNewUser = async (req, res) => {
  try {
    console.log('in post')
    const { eth_address } = req.body;
    const newUser = await User.create({ eth_address: eth_address });
    req.session.userId = newUser._id;
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

//if eth adress in DB, update NFT holdings (completely replace?)
const updateNFTCollection = async (req, res) => {
  try {
    const { eth_address } = req.body;

    //make NFT API call
    const newNFTList = getNfts(eth_address);

    //filter by which to find
    const filter = { eth_address: eth_address };
    const update = { nft_groups: newNFTList };
    const user = await User.findOneAndUpdate(filter, update, { new: true });

    res.send(user);
    res.status(204);
    return user;
  }
  catch (err) {
    console.log(err);
  }
}


//the logic is done client side



module.exports = { getDBEthAddresses, postNewUser, updateNFTCollection };

