import { drizzle } from 'drizzle-orm/node-postgres';
import { categories } from '../db/schema';
import { eq } from 'drizzle-orm';

const db = drizzle(process.env.DATABASE_URL!);

class CategoryModel {
    async getAllCategories(userId: number){
        const userCategories = await db.select({
            id: categories.id,
            name: categories.name,
            type: categories.type
        })
            .from(categories)
            .where(eq(categories.userId, userId))

        return userCategories;
    }

    async getCateoryName(categoryId: number) {
        const [category] = await db.select({
            categoryName: categories.name
        }).from(categories).where(eq(categories.id, categoryId));

        return category.categoryName;
    }
}

export default new CategoryModel();
