import { Router } from 'express';
const router = Router();
import { getThoughts, getSingleThought, createThought, updateThought, deleteThought } from '../../controllers/userController.js';

router.route('/').get(getThoughts).post(createThought);

router.route('/:userId').get(getSingleThought).put(updateThought).delete(deleteThought);

export { router as thoughtRoutes };
