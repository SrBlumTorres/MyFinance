import express from 'express';
import userAuth from '../middlewares/userAuth';
import { getAllUserTransactions, createUserTransaction } from '../controllers/transactions.controller';

const transactionRouter  = express.Router();

//! Primero pasará por el middleware el cual le añadirá información a la request que enviaremos al controller
transactionRouter.get('/', userAuth, getAllUserTransactions)
transactionRouter.post('/new-transaction', userAuth, createUserTransaction)

export default transactionRouter;
