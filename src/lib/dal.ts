import "server-only";
import { cache } from "react";
import { getSessionPayload } from "@/lib/session";
import { prisma } from "@/lib/db";

export const verifySession = cache(async () => {
  const session = await getSessionPayload();
  if (!session?.userId) return null;
  return { userId: session.userId as string };
});

export const getCurrentUser = cache(async () => {
  const session = await verifySession();
  if (!session) return null;

  const user = await prisma.user.findUnique({
    where: { id: session.userId },
    select: {
      id: true,
      name: true,
      email: true,
      verifiedSeller: true,
      gamesSold: true,
      createdAt: true,
    },
  });

  return user;
});
