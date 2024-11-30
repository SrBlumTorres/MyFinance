import { Request, RequestHandler, Response } from 'express';
import userModel from "../models/user.model";

// El controler interactua direct
async function getAllUsers(req: Request, res: Response){
    const usersResponse = await userModel.getAll();
     res.send(usersResponse);
}

export { getAllUsers };