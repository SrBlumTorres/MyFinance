import { Response } from "express"
import { ExtendedRequest } from "../config/types"
import CategoyModel from "../models/Categoy.model";
import HttpError from "../models/HttpErrors";

async function getAllUserCategories(req: ExtendedRequest, res: Response){
    try {
        // Si llega aquí si o sí existe user
        const user = req.currentUser;

        const getUserCategories = await CategoyModel.getAllCategories(user!.id);

        if (!getUserCategories) throw new HttpError(404, 'User not found');

        // La llamada es sucess, hayan datos o no
        res.status(200).json(getUserCategories);

    } catch (error) {
        console.error('Error fetching user categories');
        throw new HttpError(500, 'Internal server error');
    }
}

export { getAllUserCategories }