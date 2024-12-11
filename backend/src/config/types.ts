import { Request } from 'express';

// Sí, absolutamente, si estás trabajando con middlewares que manipulan el objeto req, como en casos de autenticación. Es una manera limpia de tipar el objeto Request con la información adicional que usará tu aplicación.

// Representa los datos básicos de un usuario autenticado
type User = {
  id: number;
  name: string;
  email: string;
};

// Extiende el objeto Request para incluir información del usuario autenticado
type ExtendedRequest = Request & {
    currentUser?: User; // Datos del usuario autenticado (si el token es válido)
};

export type { User, ExtendedRequest };
