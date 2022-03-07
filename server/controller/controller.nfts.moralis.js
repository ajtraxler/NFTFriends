
// In a node environment
const Moralis = require('moralis/node');
const serverUrl = "https://eyeteqg5af1y.usemoralis.com:2053/server";
const appId = "UP1pIX52iA03bkolFJVtcRzCP7sxDsX5CY899Skl";
Moralis.start({ serverUrl, appId });

const getNfts = async (req, res) => {
    nft_group = [];
    const { eth_address } = req.body;
    console.log("eth address", eth_address)
    const options = { address: eth_address }
    console.log("eth options", options);


    const nfts = await Moralis.Web3API.account.getNFTs(options);

    for (let nft of nfts.result) {
        if (!nft_group.includes(nft.name)) {
            nft_group.push(nft.name);
        }
    }

    // for (let nft of nfts.result) {
    //     if (!nft_group.includes({ groupName: nft.name, token_address: nft.token_address })) {
    //         nft_group.push({ groupName: nft.name, token_address: nft.token_address });
    //     }
    // }

    res.send(nft_group)
    res.status(201)
    return nft_group;

}

module.exports = { getNfts }