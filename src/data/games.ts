import { GameListing } from "@/types/game";

// No real listings yet — sellers and games populate this once the
// marketplace has live data (API/database), replacing these empty
// collections.
export const sellers: Record<string, GameListing["seller"]> = {};

export const games: GameListing[] = [];

export const categories = [
  "All Games",
  "Tycoon",
  "Simulator",
  "Roleplay",
  "Anime",
  "Adventure",
  "Obby",
  "Fighting",
  "Strategy",
];
