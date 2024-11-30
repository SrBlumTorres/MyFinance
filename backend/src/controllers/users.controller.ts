import { Request, RequestHandler, Response } from 'express';
import userModel from "../models/user.model";

async function getAllUsers(req: Request, res: Response){
    const usersResponse = await userModel.getAll();
    res.send(usersResponse);
}

async function getUserById(req: Request, res: Response){
    const userId = Number(req.params.id);
    const userUserByIdResponse = await userModel.getUserById(userId);
    res.send(userUserByIdResponse);
}

export { getAllUsers, getUserById };