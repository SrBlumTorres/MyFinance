import { log } from "console";
import { Request, Response } from "express";
import { IdUserSchema } from "../schemas/userSchema";
import ValidationError from "../models/ValidationError";
import TransactionModel from "../models/Transaction.model";
import HttpError from "../models/HttpErrors";
import { ExtendedRequest } from "../config/types";

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

export { getAllUserTransactions }
