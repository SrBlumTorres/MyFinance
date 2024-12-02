import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';
import { users } from '../db/schema';
import { eq } from 'drizzle-orm';
import { AddUserType } from '../schemas/userSchema';

// Constante con conexión
const db = drizzle(process.env.DATABASE_URL!);

class UserModel {
    //SELECT de todos los users
    async getAll() {
        const usersData = await db.select().from(users);
        return usersData;
    }

    // Find by id
    async getUserById(userId: number) {
        const [userById] = await db.select().from(users).where(eq(users.id, userId))
        return userById;
    }

    // Create user
    async createUser(newUserData: AddUserType){
        // Desesctructuramos el primer registro 
        const [insertUser] =  await db.insert(users).values({
            name: newUserData.name,
            email: newUserData.email,
            password: newUserData.password
        }).returning();
        
        return insertUser;
    }
}

// Exportamos directamente el objeto instanciado, así no hará falta hacer un new UserModel()
export default new UserModel();