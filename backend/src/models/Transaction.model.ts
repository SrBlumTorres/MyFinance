import { drizzle } from 'drizzle-orm/node-postgres';
import { categories, transactions } from '../db/schema';
import { desc, eq } from 'drizzle-orm';

const db = drizzle(process.env.DATABASE_URL!);

class TransactionModel {
    async getAllTransactions(userId: number){
        const userTransactions = await db.select({
            id: transactions.id,
            date: transactions.date,
            amount: transactions.amount,
            type: transactions.type,
            categoryId: categories.name,
            description: transactions.description,
            name: categories.name
        })
            .from(transactions)
            .leftJoin(categories, eq(transactions.id, categories.id))
            .where(eq(transactions.userId, userId))
            .orderBy(desc(transactions.date))

        return userTransactions;
    }
}

export default new TransactionModel();
