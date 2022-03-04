const express = require('express');
const router = express.Router();
//nftss
//const { getNfts } = require('../controller/controller.nfts.js');
//login
const { getDBEthAddresses, postNewUser, updateNFTCollection } = require('../controller/controller.login.js');
//dashboard
const { getCommunityEvents, addToMyEvents, removeFromMyEvents } = require('../controller/controller.dashboard.js');
//form
const { postEvent } = require('../controller/controller.form.js');
//const {changeAttending } = require('controller/controller.event.js');

//fetching NFTs related
// router.get('/', getNfts);

//LOGIN related
router.get('/', getDBEthAddresses);
router.post('/', postNewUser);
router.patch('/', updateNFTCollection); //put vs patch??


//DASHBOARD relateds
router.get('/Events', getCommunityEvents);
router.patch('/Events/:id/add', addToMyEvents);
router.patch('/Events/:id/remove', removeFromMyEvents);

//FORM related
router.post('/form', postEvent);

//Event related
// router.patch('/eventItem/:id', changeAttending);


module.exports = router;