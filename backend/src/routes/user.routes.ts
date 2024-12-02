import express from 'express';
import { getAllUsers, getUserById, createUser} from '../controllers/users.controller';

const userRouter = express.Router();

userRouter.get('/', getAllUsers);
userRouter.get('/:id', getUserById);
userRouter.post('/post', createUser);

export default userRouter;
