import { Router } from 'express';
const router = Router();
import { getUsers, getSingleUser, createUser, updateUser, deleteUser } from '../../controllers/userController.js';

router.route('/').get(getUsers).post(createUser);

router.route('/:userId').get(getSingleUser);

router.route('/:userId').get(getSingleUser).put(updateUser);

router.route('/:userId').get(getSingleUser).delete(deleteUser);

export default router ;
