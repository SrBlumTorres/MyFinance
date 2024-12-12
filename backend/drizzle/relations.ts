import { relations } from "drizzle-orm/relations";
import { users, categories, goals, debts, budgets, transactions } from "./schema";

export const categoriesRelations = relations(categories, ({one, many}) => ({
	user: one(users, {
		fields: [categories.userId],
		references: [users.id]
	}),
	budgets: many(budgets),
}));

export const usersRelations = relations(users, ({many}) => ({
	categories: many(categories),
	goals: many(goals),
	debts: many(debts),
	budgets: many(budgets),
	transactions: many(transactions),
}));

export const goalsRelations = relations(goals, ({one}) => ({
	user: one(users, {
		fields: [goals.userId],
		references: [users.id]
	}),
}));

export const debtsRelations = relations(debts, ({one}) => ({
	user: one(users, {
		fields: [debts.userId],
		references: [users.id]
	}),
}));

export const budgetsRelations = relations(budgets, ({one}) => ({
	category: one(categories, {
		fields: [budgets.categoryId],
		references: [categories.id]
	}),
	user: one(users, {
		fields: [budgets.userId],
		references: [users.id]
	}),
}));

export const transactionsRelations = relations(transactions, ({one}) => ({
	user: one(users, {
		fields: [transactions.userId],
		references: [users.id]
	}),
}));