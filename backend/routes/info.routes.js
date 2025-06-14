import  express from 'express'
const router = express.Router();

import { destination, topSelling } from '../controller/travel.controller.js';

router.get('/destination', destination);

router.get('/packages/top-selling', topSelling);

export default router