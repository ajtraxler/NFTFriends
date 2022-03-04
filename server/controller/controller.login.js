const { User, Event } = require('../model/models.js');


//get ethAdresses from UserDB
const getDBEthAddresses = async (req, res) => {
    try {
        const { eth_address } = req.body;




    }
    catch (err) { }
}

//if eth_adress not in DB yet, add to DB
const postNewUser = async (req, res) => {
    try {
        const { eth_address, nft_groups } = req.body;
        const dbRes = await User.create({ eth_address: eth_address, nft_groups: nft_groups });
        res.send(dbRes);
        res.status(201);
        return dbRes;

    }
    catch (err) {
        console.log(err, "error");
        console.log(500);
        res.end()
    }
}

//if eth adress in DB, update NFT holdings (completely replace?)
const updateNFTCollection = async (req, res) => {
    try { }
    catch (err) { }
}


//the logic is done client side



module.exports = { getDBEthAddresses, postNewUser, updateNFTCollection };

