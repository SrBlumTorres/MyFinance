import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';
import { users } from '../db/schema';

// Constante con conexión
const db = drizzle(process.env.DATABASE_URL!);

class UserModel {
    //SELECT de todos los users
    async getAll() {
        const usersData = await db.select().from(users);
        return usersData;
    }
}

// Exportamos directamente el objeto instanciado, así no hará falta hacer un new UserModel()
export default new UserModel();