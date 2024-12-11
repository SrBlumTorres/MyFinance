import { NextFunction, Response } from "express";
import jwt from 'jsonwebtoken';
import { ExtendedRequest, User } from "../config/types";
import HttpError from "../models/HttpErrors";

// Este middleware userAuth tiene como propósito autenticar y autorizar al usuario verificando un token de acceso (access_token) enviado en las cookies. 
function userAuth(
    req: ExtendedRequest, // Objeto de la solicitud extendido con la propiedad `user`, el que pasaremos!!
    res: Response,        // Objeto de la respuesta
    next: NextFunction    // Función para pasar al siguiente middleware
  ) {
    // Extraer el token de las cookies enviadas en la solicitud
    const token = req.cookies.access_token;
  
    
    // Si no hay token, lanzar un error indicando que es necesario autenticar
    if (!token) {
      throw new HttpError(401, 'You must send an access token');
    }
  
    let payload; // Variable para almacenar el contenido decodificado del token
  
    try {
      // Verificar la validez del token usando la clave secreta
      // Si el token es válido, se decodifica y se almacena en `payload`
      payload = jwt.verify(token, process.env.TOKEN_SECRET!) as User;
    } catch (error) {
      // Si el token es inválido o ha expirado, lanzar un error
      throw new HttpError(401, 'Token invalid or expired');
    }
  
    //* TOKEN VÁLIDO
    // Asociar el contenido del token decodificado al objeto de la solicitud
    // Esto permite que los controladores accedan a `req.user` para usar la información del usuario
    req.currentUser = payload;
  
    // Llamar a la siguiente función en la pila de middleware o al controlador final
    next();
}
  
export default userAuth;