import express from 'express';
import { bookTicket, getTickets } from '../controllers/tickets.js';
import {getUsers} from '../controllers/users.js';
import {createUser} from '../controllers/users.js';
import {authenticateUser} from '../controllers/users.js';


const router = express.Router();

router.get('/users' , getUsers);

router.post('/users/create',createUser);

router.post('/users/authenticate', authenticateUser);

router.get('/tickets', getTickets);

router.post('/bookticket', bookTicket);





export default router;