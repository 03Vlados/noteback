import express from 'express';
import {
  createTask,
  deleteTask,
  getCurrentUserTasks,
  updateTask,
} from '../controllers/task.js';

const router = express.Router();

router.post('/', createTask);
router.get('/myTasks', getCurrentUserTasks);
router.put('/:taskId', updateTask);
router.delete('/:taskId', deleteTask);

export default router;
