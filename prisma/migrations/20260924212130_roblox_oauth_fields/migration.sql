-- AlterTable
ALTER TABLE "User" ADD COLUMN     "robloxUserId" TEXT,
ADD COLUMN     "robloxUsername" TEXT,
ALTER COLUMN "email" DROP NOT NULL,
ALTER COLUMN "passwordHash" DROP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "User_robloxUserId_key" ON "User"("robloxUserId");

