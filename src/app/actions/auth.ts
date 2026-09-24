"use server";

import { redirect } from "next/navigation";
import { prisma } from "@/lib/db";
import { hashPassword, verifyPassword } from "@/lib/password";
import { createSession, deleteSession } from "@/lib/session";
import { LoginSchema, SignupSchema } from "@/lib/validation";
import { safeNextPath } from "@/lib/next-path";

export type AuthFormState =
  | {
      errors?: {
        name?: string[];
        email?: string[];
        password?: string[];
      };
      message?: string;
    }
  | undefined;

export async function signup(
  _state: AuthFormState,
  formData: FormData
): Promise<AuthFormState> {
  const validated = SignupSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validated.success) {
    return { errors: validated.error.flatten().fieldErrors };
  }

  const { name, email, password } = validated.data;

  const existing = await prisma.user.findUnique({ where: { email } });
  if (existing) {
    return { message: "An account with that email already exists." };
  }

  const passwordHash = await hashPassword(password);
  const user = await prisma.user.create({
    data: { name, email, passwordHash },
  });

  await createSession(user.id);
  redirect(safeNextPath(formData.get("next")));
}

export async function login(
  _state: AuthFormState,
  formData: FormData
): Promise<AuthFormState> {
  const validated = LoginSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validated.success) {
    return { errors: validated.error.flatten().fieldErrors };
  }

  const { email, password } = validated.data;

  const user = await prisma.user.findUnique({ where: { email } });
  if (!user || !user.passwordHash) {
    return {
      message: user
        ? "This account signs in with Roblox. Use “Continue with Roblox” below."
        : "Invalid email or password.",
    };
  }

  const passwordMatches = await verifyPassword(password, user.passwordHash);
  if (!passwordMatches) {
    return { message: "Invalid email or password." };
  }

  await createSession(user.id);
  redirect(safeNextPath(formData.get("next")));
}

export async function logout() {
  await deleteSession();
  redirect("/");
}
