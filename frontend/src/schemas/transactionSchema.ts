import { z } from "zod";

// Esquema para crear una transacción, los datos que nos enviarán
const transactionSchema = z.object({
    date: z
        .string(),
    type: z
        .enum(["income", "debt", "expense"], {
            required_error: "El tipo es obligatorio",
        }) // Enum con los valores permitidos
        .describe("Tipo de transacción: ingreso, deuda o gasto."),
    category: z
        .coerce.number()
        .int()
        .optional()
        .describe("La categoría debe ser un número positivo"), // La categoría debe ser un entero positivo
    description: z
        .string()
        .max(150, "La descripción no puede superar los 150 caracteres") // Máximo de 150 caracteres
        .optional()
        .describe("Descripción opcional de la transacción."),
    amount: z
        .coerce.number({
            required_error: "El monto es obligatorio",
        })
        .positive("El monto debe ser un número positivo") // El monto debe ser positivo
        .describe("Monto asociado a la transacción."),
});

// Genera un tipo de TypeScript basado en el esquema
type AddTransactionType = z.infer<typeof transactionSchema>;

export type { AddTransactionType };
export { transactionSchema };
