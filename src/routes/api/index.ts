import { Router } from 'express';
const router = Router();
import { thoughtRoutes } from './thoughtRoutes.js';
import { userRoutes } from './userRoutes.js';
import reactionRoutes from './reactionRoutes.ts';

router.use('/thoughts', thoughtRoutes);
router.use('/users', userRoutes);
router.use('/reactions', reactionRoutes);

export default router;