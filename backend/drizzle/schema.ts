import { pgTable, foreignKey, serial, integer, varchar, date, timestamp, unique, pgEnum } from "drizzle-orm/pg-core"
import { sql } from "drizzle-orm"

export const enumCategory = pgEnum("enum_category", ['income', 'expense', 'debt'])
export const enumDebt = pgEnum("enum_debt", ['owed', 'receivable'])


export const categories = pgTable("categories", {
	id: serial().primaryKey().notNull(),
	userId: integer("user_id"),
	name: varchar({ length: 50 }),
	type: enumCategory(),
}, (table) => {
	return {
		categoriesUserIdFkey: foreignKey({
			columns: [table.userId],
			foreignColumns: [users.id],
			name: "categories_user_id_fkey"
		}).onUpdate("cascade").onDelete("cascade"),
	}
});

export const goals = pgTable("goals", {
	id: serial().primaryKey().notNull(),
	userId: integer("user_id"),
	name: varchar({ length: 50 }).notNull(),
	targetAmount: integer("target_amount").notNull(),
	currentAmount: integer("current_amount").notNull(),
	dueDate: date("due_date").notNull(),
	createdAt: timestamp("created_at", { mode: 'string' }).defaultNow().notNull(),
	modifiedAt: timestamp("modified_at", { mode: 'string' }).defaultNow().notNull(),
}, (table) => {
	return {
		goalsUserIdFkey: foreignKey({
			columns: [table.userId],
			foreignColumns: [users.id],
			name: "goals_user_id_fkey"
		}).onUpdate("cascade").onDelete("cascade"),
	}
});

export const debts = pgTable("debts", {
	id: serial().primaryKey().notNull(),
	userId: integer("user_id"),
	contactName: varchar("contact_name", { length: 50 }).notNull(),
	amount: integer().notNull(),
	date: date().default(sql`CURRENT_DATE`).notNull(),
	dueDate: date("due_date").notNull(),
	status: enumDebt().notNull(),
}, (table) => {
	return {
		debtsUserIdFkey: foreignKey({
			columns: [table.userId],
			foreignColumns: [users.id],
			name: "debts_user_id_fkey"
		}).onUpdate("cascade").onDelete("cascade"),
	}
});

export const budgets = pgTable("budgets", {
	id: serial().primaryKey().notNull(),
	userId: integer("user_id"),
	categoryId: integer("category_id"),
	monthlyLimit: integer("monthly_limit"),
	createdAt: timestamp("created_at", { mode: 'string' }).defaultNow().notNull(),
	modifiedAt: timestamp("modified_at", { mode: 'string' }).defaultNow().notNull(),
}, (table) => {
	return {
		budgetsCategoryIdFkey: foreignKey({
			columns: [table.categoryId],
			foreignColumns: [categories.id],
			name: "budgets_category_id_fkey"
		}).onUpdate("cascade").onDelete("cascade"),
		budgetsUserIdFkey: foreignKey({
			columns: [table.userId],
			foreignColumns: [users.id],
			name: "budgets_user_id_fkey"
		}).onUpdate("cascade").onDelete("cascade"),
	}
});

export const transactions = pgTable("transactions", {
	id: serial().primaryKey().notNull(),
	userId: integer("user_id").notNull(),
	type: enumCategory().notNull(),
	categoryId: integer("category_id"),
	date: date().default(sql`CURRENT_DATE`).notNull(),
	description: varchar({ length: 150 }),
	amount: integer().notNull(),
}, (table) => {
	return {
		transactionsUserIdFkey: foreignKey({
			columns: [table.userId],
			foreignColumns: [users.id],
			name: "transactions_user_id_fkey"
		}).onUpdate("cascade").onDelete("cascade"),
	}
});

export const users = pgTable("users", {
	id: serial().primaryKey().notNull(),
	name: varchar({ length: 50 }).notNull(),
	email: varchar({ length: 50 }).notNull(),
	password: varchar({ length: 60 }).notNull(),
	createdAt: timestamp("created_at", { mode: 'string' }).defaultNow(),
	modifiedAt: timestamp("modified_at", { mode: 'string' }).defaultNow(),
	surname: varchar({ length: 50 }).notNull(),
	secondSurname: varchar("second_surname", { length: 50 }),
}, (table) => {
	return {
		usersEmailKey: unique("users_email_key").on(table.email),
	}
});
