"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/db";
import { getCurrentUser } from "@/lib/dal";
import { isAdmin } from "@/lib/admin";

async function requireAdmin() {
  const user = await getCurrentUser();
  if (!user || !isAdmin(user)) {
    throw new Error("Forbidden");
  }
  return user;
}

export async function approveListing(listingId: string) {
  await requireAdmin();
  await prisma.listing.update({
    where: { id: listingId },
    data: { status: "APPROVED" },
  });
  revalidatePath("/admin/listings");
  revalidatePath("/browse");
  revalidatePath("/");
}

export async function rejectListing(listingId: string) {
  await requireAdmin();
  await prisma.listing.update({
    where: { id: listingId },
    data: { status: "REJECTED" },
  });
  revalidatePath("/admin/listings");
}

export async function setUserRole(userId: string, role: "USER" | "ADMIN") {
  const admin = await requireAdmin();
  if (userId === admin.id && role === "USER") {
    throw new Error("You can't remove your own admin access.");
  }
  await prisma.user.update({
    where: { id: userId },
    data: { role },
  });
  revalidatePath("/admin/users");
}
