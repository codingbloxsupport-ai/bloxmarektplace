"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/db";
import { getCurrentUser } from "@/lib/dal";
import { isAdminEmail } from "@/lib/admin";

async function requireAdmin() {
  const user = await getCurrentUser();
  if (!user || !isAdminEmail(user.email)) {
    throw new Error("Forbidden");
  }
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
