import { z } from 'zod';

const transactionSchema = z.object({
    id: z
        .number()
        .int()
        .positive(), // id debe ser un entero positivo
    type: z
        .enum(["income", "debt", "expense"]), // Enum con los valores permitidos
    category: z
        .number()
        .int()
        .positive(), // category debe ser un entero positivo
    description: z
        .string()
        .max(150, "La descripción no puede superar los 150 caracteres"), // String de máximo 150 caracteres
    amount: z
        .number()
        .int(), // amount debe ser un entero
});

type AddTransactionType = z.infer<typeof transactionSchema>;

export type { AddTransactionType };
export { transactionSchema };
