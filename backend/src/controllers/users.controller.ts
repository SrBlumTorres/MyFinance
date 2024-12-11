import { Request, RequestHandler, Response } from 'express';
// import userModel from "../models/User.model";
import { UserLogin, AddUserSchema, IdUserSchema } from '../schemas/userSchema';
import userModel from '../models/User.model';
import { log } from 'console';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import ValidationError from '../models/ValidationError';
import HttpError from '../models/HttpErrors';


async function login(req: Request, res: Response){
    // Mail por un lado, password por otro
    try {
        const userCredentials = req.body;
        const {success, data: userCredentialsLogin, error} = UserLogin.safeParse(userCredentials);
    
        if (!success) throw new ValidationError(error);
        // Comprobamos email en BBDD
        const user = await userModel.checkEmail(userCredentialsLogin.email);
    
        // En caso de error en respesta en el server
        if (!user) throw new HttpError(404, 'Email or password not found' );
        
        // Ya sabemos quue el usuario existe ahora hay que comprobar que la contraseña que me pases sea correcta
        const isPasswordCorrect = await bcrypt.compare(
            userCredentialsLogin.password,
            user.password
        );

        if (!isPasswordCorrect) throw new HttpError(404, 'Email or password not found' )

        const userToSend = {
            id: user.id,
            email: user.email,
            name: user.name,
        };

        // Convertimos la información del usuario en un token, podemos pasar lo que queramos, menos el //!PASSWORD
        const token = jwt.sign(userToSend, process.env.TOKEN_SECRET!, {
            expiresIn: '1d',
        });

        res.cookie('access_token', token, {
            httpOnly: true,
            maxAge: 60 * 60 * 24, // 1 day,
            sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax', //.env
            secure: true,
        });

        res.status(200).json(userToSend);

    } catch (error) {
        console.error(error);
        throw new HttpError(500, 'Internal server error' );
    }

}


async function getAllUsers(req: Request, res: Response){
    try {
        const usersResponse = await userModel.getAll();
        res.send(usersResponse);
    } catch (error) {
        console.error('Error fetching users:', error);
        throw new HttpError(500, 'Internal server error' );
    }
}

async function getUserById(req: Request, res: Response){
    try {
        const userId = req.params.id;
        const {success, data: id , error} = IdUserSchema.safeParse(userId);
    
        // Validamos cualquier error ocasionado
        if (!success) throw new ValidationError(error);
        
        const userByIdResponse = await userModel.getUserById(id);
        
        if (!userByIdResponse) throw new HttpError(404, 'User not found' );

        // La llamada ha sido exitosa
        res.status(200).json(userByIdResponse);
        
    } catch (error) {
        console.error('Error fetching user:', error);
        throw new HttpError(500, 'Internal server error' );
    }   
}

async function createUser(req: Request, res: Response){
    // Recogida de datos
    const newUserData = req.body
    
    // Validación de respuesta con ZOD, ZOD nos devuelve estos 3 params
    const { success, data, error } = AddUserSchema.safeParse(newUserData);

    // Los errores debo controlarlos con un modelo, ya que este en concrerto es de lo que recibo, no de una acción del servidor
    if (!success) throw new ValidationError(error); 

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

export { getAllUsers, getUserById, createUser, login};