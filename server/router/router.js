const express = require('express');
const router = express.Router();

const { getDBEthAddresses, postNewUser, updateNFTCollection, postFakeUser } = require('../controller/controller.login.js');
const { getCommunityEvents, addToMyEvents, removeFromMyEvents } = require('../controller/controller.dashboard.js');
const { postEvent } = require('../controller/controller.form.js');

router.get('/login/:eth_address', getDBEthAddresses);
router.post('/login/:eth_address', postNewUser);
router.post('/login', postFakeUser);
router.patch('/login/:eth_address', updateNFTCollection);
router.post('/events', getCommunityEvents);
router.patch('/events/add', addToMyEvents);
router.patch('/events/remove', removeFromMyEvents);
router.post('/form', postEvent);

module.exports = router;