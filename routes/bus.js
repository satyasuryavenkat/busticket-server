import express from 'express';
import {getUsers} from '../controllers/users.js';
import {createUser} from '../controllers/users.js';
import {authenticateUser} from '../controllers/users.js';


const router = express.Router();

router.get('/users' , getUsers);

router.post('/users/create',createUser);

router.post('/users/authenticate', authenticateUser);






export default router;