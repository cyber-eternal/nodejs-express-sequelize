import express from 'express';
import getHandler from './controllers/get';
import wrapResponse from '../../middleware/response';

const router = express.Router();

router.get('/:id?', wrapResponse(getHandler));

export default router;