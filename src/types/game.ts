export interface Seller {
  id: string;
  name: string;
  avatarInitials: string;
  verified: boolean;
  gamesSold: number;
}

export interface GameListing {
  id: string;
  slug: string;
  title: string;
  tags: string[];
  category: string;
  price: number;
  monthlyRevenue: number;
  monthlyVisits: number;
  description: string;
  gradient: [string, string];
  featured: boolean;
  verifiedSeller: boolean;
  escrowProtected: boolean;
  seller: Seller;
}
