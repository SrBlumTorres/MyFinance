import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';
import { eq } from 'drizzle-orm';
import { users } from './schema';

// Conexión para las consultas
const db = drizzle(process.env.DATABASE_URL!);

//CRUD, lo debe hacer el modelo, y el controlador llamarlo
// export const usersSelect = await db.select().from(users);
// console.log('Getting all users from the database: ', usersSelect)