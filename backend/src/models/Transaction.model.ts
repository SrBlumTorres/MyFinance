import { drizzle } from 'drizzle-orm/node-postgres';
import { categories, transactions } from '../db/schema';
import { desc, eq } from 'drizzle-orm';
import { AddTransactionType } from '../schemas/transactionSchema';
import { User } from '../config/types';

const db = drizzle(process.env.DATABASE_URL!);

class TransactionModel {
    async getAllTransactions(userId: number){
        const userTransactions = await db.select({
            id: transactions.id,
            date: transactions.date,
            amount: transactions.amount,
            type: transactions.type,
            description: transactions.description,
            name: categories.name
        })
            .from(transactions)
            .leftJoin(categories, eq(transactions.id, categories.id))
            .where(eq(transactions.userId, userId))
            .orderBy(desc(transactions.date))

        return userTransactions;
    }

    // Pasamos el schema de transaction
    async createTransaction(newTransactionData: AddTransactionType, currentUser: User){
        const [insertTransaction] = await db.insert(transactions).values({
            userId: currentUser.id,
            date: newTransactionData.date,
            type: newTransactionData.description,
            categoryId: newTransactionData.category,
            amount: newTransactionData.amount,
            description: newTransactionData.description
        }).returning();

        return insertTransaction;
    }
}

export default new TransactionModel();
