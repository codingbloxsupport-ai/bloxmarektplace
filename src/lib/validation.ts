import * as z from "zod";

export const SignupSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters."),
  email: z.email("Enter a valid email address.").trim(),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters.")
    .regex(/[a-zA-Z]/, "Password must contain at least one letter.")
    .regex(/[0-9]/, "Password must contain at least one number."),
});

export const LoginSchema = z.object({
  email: z.email("Enter a valid email address.").trim(),
  password: z.string().min(1, "Password is required."),
});

export const ListingSchema = z.object({
  title: z.string().trim().min(3, "Title must be at least 3 characters.").max(80),
  category: z.string().trim().min(1, "Select a category."),
  price: z.coerce.number().int().positive("Enter a positive price."),
  monthlyRevenue: z.coerce.number().int().nonnegative("Enter a valid revenue amount."),
  monthlyVisits: z.coerce.number().int().nonnegative("Enter a valid visit count."),
  description: z
    .string()
    .trim()
    .min(20, "Description must be at least 20 characters.")
    .max(2000),
});
