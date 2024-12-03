// Utilizaremos ZOD para la validación de los elementos que recibamos para el backend, para insertar en la BBDD
// En este caso, únicamente de los datos de usuarios
// Esta librería sirve tanto para frontend como backend

import { z } from 'zod';

const IdUserSchema = z.coerce.number({
  invalid_type_error: 'The ID must be a number',
});


// Orientado a validar
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

// Con pick mantenemos ciertas props
const UserLogin = AddUserSchema.pick({
    email: true,
    password: true,
});

type AddUserType = z.infer<typeof AddUserSchema>;
type UserLoginType = z.infer<typeof UserLogin>;

export { AddUserSchema, IdUserSchema, UserLogin};

export type { AddUserType, UserLoginType};