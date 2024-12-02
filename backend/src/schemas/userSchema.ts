// Utilizaremos ZOD para la validación de los elementos que recibamos para el backend, para insertar en la BBDD
// En este caso, únicamente de los datos de usuarios
// Esta librería sirve tanto para frontend como backend

import { z } from 'zod';

// Orientado a insertar
// Atributos de la DB, tabla users
const AddUserSchema = z.object({
    name: z
      .string()
      .min(1, 'Name required')
      .max(50, 'Max 50 characters'),
    email: z
      .string()
      .email('Invalid email')
      .min(1, 'Email required')
      .max(150, 'Max 150 characters'),
    password: z
      .string()
      .min(1, 'Password required')
      .max(16, 'Max 16 characters'),
});

type AddUserType = z.infer<typeof AddUserSchema>;

export { AddUserSchema };

export type { AddUserType };