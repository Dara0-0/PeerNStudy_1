// userRoutes.js
import express from 'express';
import authenticateToken from '../middleware/auth.js';
import { savePersonalInfo } from '../controllers/userController.js';

const router = express.Router();

router.post('/save-personal-info', authenticateToken, savePersonalInfo);

export default router;
