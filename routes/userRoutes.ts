import express from 'express';
import { getUser, updateUser } from '../controller/api';
import { authMiddleware } from '../middleware/authMiddleware';

const router = express.Router();

router.get('/fetch-user-data/:id', authMiddleware, getUser);
router.put('/update-user-data/:id', authMiddleware, updateUser);

export default router;
