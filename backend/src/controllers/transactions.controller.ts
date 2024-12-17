import { log } from "console";
import { Request, Response } from "express";
import { IdUserSchema } from "../schemas/userSchema";
import ValidationError from "../models/ValidationError";
import TransactionModel from "../models/Transaction.model";
import HttpError from "../models/HttpErrors";
import { ExtendedRequest, User } from "../config/types";
import { transactionSchema } from "../schemas/transactionSchema";

async function getAllUserTransactions(req: ExtendedRequest, res: Response) {
    try {
        //Si llega aquí si o si existe
        const user = req.currentUser;
        
        const getUserTransactions = await TransactionModel.getAllTransactions(user!.id);
        
        if (!getUserTransactions) throw new HttpError(404, 'User not found' );

        // La llamada ha sido exitosa
        res.status(200).json(getUserTransactions);
        
    } catch (error) {
        console.error('Error fetching user transactions:', error);
        throw new HttpError(500, 'Internal server error' );
    }
}

async function createUserTransaction (req: ExtendedRequest, res: Response){
    const currentUser = req.currentUser as User;
    
    try {
        //Recogida de datos
        const newTransactionData = req.body;
        newTransactionData.userId = currentUser.id;

        //Validación de la correcta estructura de transaction mediante zod
        const { success, data, error } = transactionSchema.safeParse(newTransactionData);


        if (!success) throw new ValidationError(error);

        
        const newTransactionResponse = await TransactionModel.createTransaction(data, currentUser);

        if (!newTransactionResponse) throw new HttpError(404, 'Cannot create transactiion')

        // Llamada exitosa
        res.status(201).json(newTransactionResponse)
        
    } catch (error) {
        console.error('Error creating transaction:', error);
        throw new HttpError(500, 'Internal server error')
    }
}

export { getAllUserTransactions, createUserTransaction }
