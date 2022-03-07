const express = require('express');
const router = express.Router();
//nftss
const { getNfts } = require('../controller/controller.nfts.moralis.js');
//login
const { getDBEthAddresses, postNewUser, updateNFTCollection } = require('../controller/controller.login.js');
//dashboard
const { getCommunityEvents, addToMyEvents, removeFromMyEvents } = require('../controller/controller.dashboard.js');
//form
const { postEvent } = require('../controller/controller.form.js');
//const {changeAttending } = require('controller/controller.event.js');





//fetching NFTs related
router.get('/nfts/:eth_address', getNfts);

//LOGIN related
router.get('/', getDBEthAddresses);
router.post('/', postNewUser);
router.patch('/', updateNFTCollection); //put vs patch??


//DASHBOARD relateds
router.get('/events', getCommunityEvents);
// router.patch('/events/:id/add', addToMyEvents);
router.patch('/events/add', addToMyEvents);
router.patch('/events/remove', removeFromMyEvents);

//FORM related
router.post('/form', postEvent);

//Event related
// router.patch('/eventItem/:id', changeAttending); dont think i need this... can use dashsboard functions
//and green button can be handled by front end ...


module.exports = router;