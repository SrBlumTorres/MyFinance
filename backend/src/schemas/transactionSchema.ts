import { z } from "zod";

// Esquema para crear una transacción, los datos que nos enviarán
const transactionSchema = z.object({
    userId: z
      .number({
        invalid_type_error: "El ID del usuario debe ser un número.",
        required_error: "El ID del usuario es obligatorio.",
      })
      .int("El ID del usuario debe ser un número entero.")
      .positive("El ID del usuario debe ser un número positivo."),
  
    date: z
      .string({
        invalid_type_error: "La fecha debe ser una cadena válida.",
        required_error: "La fecha es obligatoria.",
      })
      .refine((date) => !isNaN(Date.parse(date)), {
        message: "La fecha debe tener un formato válido (YYYY-MM-DD).",
      })
      .describe("Fecha de la transacción en formato YYYY-MM-DD."),
  
    type: z
      .enum(["income", "debt", "expense"], {
        required_error: "El tipo de transacción es obligatorio.",
        invalid_type_error: "El tipo debe ser 'income', 'debt' o 'expense'.",
      })
      .describe("Tipo de transacción: ingreso, deuda o gasto."),
  
    category: z
      .coerce
      .number({
        invalid_type_error: "La categoría debe ser un número válido.",
      })
      .int("La categoría debe ser un número entero.")
      .positive("La categoría debe ser un número positivo.")
      .optional()
      .describe("Categoría numérica de la transacción (opcional)."),
  
    description: z
      .string({
        invalid_type_error: "La descripción debe ser una cadena de texto.",
      })
      .max(150, "La descripción no puede superar los 150 caracteres.")
      .optional()
      .describe("Descripción opcional de la transacción."),
  
    amount: z
      .coerce
      .number({
        invalid_type_error: "El monto debe ser un número válido.",
        required_error: "El monto es obligatorio.",
      })
      .positive("El monto debe ser un número positivo.")
      .describe("Monto asociado a la transacción."),
});

// Genera un tipo de TypeScript basado en el esquema
type AddTransactionType = z.infer<typeof transactionSchema>;

export type { AddTransactionType };
export { transactionSchema };
