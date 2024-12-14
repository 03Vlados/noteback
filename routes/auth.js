import express from 'express';
import { isLoggedIn, login, logout, register } from '../controllers/auth.js';

const router = express.Router();

router.get('/logout', logout);
router.post('/login', login);
router.post('/register', register);
router.get('/check', isLoggedIn);

export default router;
