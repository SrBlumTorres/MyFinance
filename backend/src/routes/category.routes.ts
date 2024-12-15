import express from 'express';
import userAuth from '../middlewares/userAuth';
import { getAllUserCategories } from '../controllers/categories.controller';

const categoryRouter  = express.Router();

//! Primero pasará por el middleware el cual le añadirá información a la request que enviaremos al controller
categoryRouter.get('/', userAuth, getAllUserCategories)

export default categoryRouter;
