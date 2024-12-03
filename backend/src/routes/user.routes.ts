import express from 'express';
import { getAllUsers, getUserById, createUser, login} from '../controllers/users.controller';

const userRouter = express.Router();

userRouter.get('/', getAllUsers);
userRouter.get('/:id', getUserById);
userRouter.post('/post', createUser);
userRouter.post('/login', login);
export default userRouter;
