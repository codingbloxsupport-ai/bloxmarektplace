"use server";

import { prisma } from "@/lib/db";
import { verifySession } from "@/lib/dal";
import { ListingSchema } from "@/lib/validation";
import { slugify, randomSuffix } from "@/lib/slug";
import { gradientForSlug } from "@/lib/gradients";

export type ListingFormState =
  | {
      errors?: {
        title?: string[];
        category?: string[];
        price?: string[];
        monthlyRevenue?: string[];
        monthlyVisits?: string[];
        description?: string[];
      };
      message?: string;
      success?: boolean;
    }
  | undefined;

export async function createListing(
  _state: ListingFormState,
  formData: FormData
): Promise<ListingFormState> {
  const session = await verifySession();
  if (!session) {
    return { message: "You must be logged in to list a game." };
  }

  const validated = ListingSchema.safeParse({
    title: formData.get("title"),
    category: formData.get("category"),
    price: formData.get("price"),
    monthlyRevenue: formData.get("revenue"),
    monthlyVisits: formData.get("visits"),
    description: formData.get("description"),
  });

  if (!validated.success) {
    return { errors: validated.error.flatten().fieldErrors };
  }

  const { title, category, price, monthlyRevenue, monthlyVisits, description } =
    validated.data;

  const slug = `${slugify(title)}-${randomSuffix()}`;
  const [gradientFrom, gradientTo] = gradientForSlug(slug);

  await prisma.listing.create({
    data: {
      slug,
      title,
      category,
      tags: [category],
      price,
      monthlyRevenue,
      monthlyVisits,
      description,
      gradientFrom,
      gradientTo,
      sellerId: session.userId,
    },
  });

  return { success: true };
}
