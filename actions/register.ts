"use server";

import { LoginSchema } from "@/schemas";
import * as z from "zod";

export async function register(values: z.infer<typeof LoginSchema>) {
  const validatedFields = LoginSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields" };
  }

  return { success: "Register success" };
}
