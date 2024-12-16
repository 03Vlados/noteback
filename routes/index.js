import express from 'express';
import checkAuth from '../utils/checkAuth.js';
import authRoutes from './auth.js';
import usersRoutes from './users.js';
import tasksRoutes from './tasks.js';

const router = express.Router();

router.use('/auth', authRoutes);
router.use('/tasks', checkAuth, tasksRoutes);
router.use('/users', checkAuth, usersRoutes);

export default router;
