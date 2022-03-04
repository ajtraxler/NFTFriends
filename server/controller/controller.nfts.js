//external alchemy API
// alchemy-nft-api/alchemy-web3-script.js


const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
//import db from "../model/db";

// Replace with your Alchemy api key:
const apiKey = "qE8laqQBcKmKtsvAxBbWAJrHepxaEeGn";

// Initialize an alchemy-web3 instance:
const web3 = createAlchemyWeb3(
    `https://eth-mainnet.alchemyapi.io/v2/${apiKey}`,
);
const getNfts = async (req, res) => {
    // The wallet address we want to query for NFTs:
    const { eth_address } = req.body;
    const ownerAddr = eth_address //check this is a string..
    const nft_groups = [];

    const nfts = await web3.alchemy.getNfts({
        owner: ownerAddr
    })
    // Print contract address and tokenId for each NFT:

    for (let nft of nfts.ownedNfts) {
        if (!nft_groups.includes(nft)) {
            nft_groups.push(nft);
        }
    }
    res.send(nft_groups);
    res.status(201)
    return nft_groups;//do not fully undertand the difference res end and return
    //take return value and save
}

module.exports = getNfts;