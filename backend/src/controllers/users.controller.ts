import { Request, RequestHandler, Response } from 'express';
// import userModel from "../models/User.model";
import { AddUserSchema } from '../schemas/userSchema';
import userModel from '../models/user.model';
import { log } from 'console';
import bcrypt from 'bcrypt';

async function getAllUsers(req: Request, res: Response){
    const usersResponse = await userModel.getAll();
    res.send(usersResponse);
}

async function getUserById(req: Request, res: Response){
    const userId = Number(req.params.id);
    const userUserByIdResponse = await userModel.getUserById(userId);
    res.send(userUserByIdResponse);
}

async function createUser(req: Request, res: Response){
    // Recogida de datos
    const newUserData = req.body
    
    // Validación de respuesta con ZOD, ZOD nos devuelve estos 3 params
    const { success, data , error } = AddUserSchema.safeParse(newUserData);

    // Los errores debo controlarlos, se debe crear un Modelo
    if (!success) throw new Error('Error'); 

    // Como sabemos que ha ido bien, ahora ya podemos encriptar la contraseña, bcrypt, librería
    const saltNumber = 10;
    const encryptedPassword = await bcrypt.hash(data.password, saltNumber);

    // Cambiar contraseña plana por encriptada
    data.password = encryptedPassword;

    try {
        const createUserResponse = await userModel.createUser(data);
        // Respuesta, obligatoria indicar el tipo, en este caso 201
        res.status(201).send(createUserResponse);
    } catch (error) {
        console.log(error);
    }

}

export { getAllUsers, getUserById, createUser };