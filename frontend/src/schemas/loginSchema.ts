import { z } from 'zod';

const signUpSchema = z.object({
    name: z
      .string({
        invalid_type_error: "Name must be a string",
      })
      .min(1, "Name is required")
      .min(4, "Min 4 characters"),
    email: z
      .string({
        required_error: "Email required",
      })
      .email("Invalid email")
      .min(4, "Min 4 characters"),
    password: z
      .string({
        required_error: "Password is required",
      })
      .min(1, "Password required")
      .min(4, "Min 4 characters")
      .max(16, "Max 16 characters"), // Opcional, al encryptcar con bcrypt salen 50 siempre en la BBDD
});

const loginSchema = signUpSchema.pick({
    email: true,
    password: true,
});
  
type AddSignUpType = z.infer<typeof signUpSchema>
type AddLoginType = z.infer<typeof loginSchema>

export type { AddLoginType, AddSignUpType };

export { signUpSchema, loginSchema };
