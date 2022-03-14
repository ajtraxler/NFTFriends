import express from 'express';
const route = express.Router();

import { getDBEthAddresses, postNewUser, updateNFTCollection, postFakeUser } from './controller/controller.login';
import { getCommunityEvents, addToMyEvents, removeFromMyEvents } from './controller/controller.dashboard';
import { postEvent } from './controller/controller.form';

route.get('/login/:eth_address', getDBEthAddresses);
route.post('/login/:eth_address', postNewUser);
route.post('/login', postFakeUser);
route.patch('/login/:eth_address', updateNFTCollection);
route.post('/events', getCommunityEvents);
route.patch('/events/add', addToMyEvents);
route.patch('/events/remove', removeFromMyEvents);
route.post('/form', postEvent);
 
export const router = route;