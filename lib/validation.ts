import { z } from "zod";

export const UserFormValidation = z.object({
    name: z.string()
      .min(2, "Nome de usuário inválido")
      .max(50, "Nome de usuário inválido"),
    email: z.string().email("Endereço de email inválido."),
    phone: z.string().refine((phone) => /^\+\d{10,15}$/.test(phone), "Número de telefone inválido")
  })