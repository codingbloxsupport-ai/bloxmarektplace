import "server-only";
import { prisma } from "@/lib/db";
import { initialsFrom } from "@/lib/initials";
import type { GameListing } from "@/types/game";
import type { Listing, User } from "@/generated/prisma/client";

function toGameListing(listing: Listing & { seller: User }): GameListing {
  return {
    id: listing.id,
    slug: listing.slug,
    title: listing.title,
    tags: listing.tags,
    category: listing.category,
    price: listing.price,
    monthlyRevenue: listing.monthlyRevenue,
    monthlyVisits: listing.monthlyVisits,
    description: listing.description,
    gradient: [listing.gradientFrom, listing.gradientTo],
    featured: listing.featured,
    verifiedSeller: listing.seller.verifiedSeller,
    escrowProtected: listing.escrowProtected,
    seller: {
      id: listing.seller.id,
      name: listing.seller.name,
      avatarInitials: initialsFrom(listing.seller.name),
      verified: listing.seller.verifiedSeller,
      gamesSold: listing.seller.gamesSold,
    },
  };
}

export async function getApprovedListings(query?: string) {
  const listings = await prisma.listing.findMany({
    where: {
      status: "APPROVED",
      ...(query
        ? { title: { contains: query, mode: "insensitive" as const } }
        : {}),
    },
    include: { seller: true },
    orderBy: [{ featured: "desc" }, { createdAt: "desc" }],
  });
  return listings.map(toGameListing);
}

export async function getListingBySlug(slug: string) {
  const listing = await prisma.listing.findFirst({
    where: { slug, status: "APPROVED" },
    include: { seller: true },
  });
  return listing ? toGameListing(listing) : null;
}

export async function getRelatedListings(category: string, excludeId: string) {
  const sameCategory = await prisma.listing.findMany({
    where: { status: "APPROVED", category, id: { not: excludeId } },
    include: { seller: true },
    take: 3,
  });
  if (sameCategory.length > 0) return sameCategory.map(toGameListing);

  const fallback = await prisma.listing.findMany({
    where: { status: "APPROVED", id: { not: excludeId } },
    include: { seller: true },
    take: 3,
  });
  return fallback.map(toGameListing);
}

export async function getSellerWithListings(sellerId: string) {
  const seller = await prisma.user.findUnique({ where: { id: sellerId } });
  if (!seller) return null;

  const listings = await prisma.listing.findMany({
    where: { sellerId, status: "APPROVED" },
    include: { seller: true },
    orderBy: { createdAt: "desc" },
  });

  return {
    seller: {
      id: seller.id,
      name: seller.name,
      avatarInitials: initialsFrom(seller.name),
      verified: seller.verifiedSeller,
      gamesSold: seller.gamesSold,
    },
    listings: listings.map(toGameListing),
  };
}
