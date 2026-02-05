/*
  Warnings:

  - A unique constraint covering the columns `[verifiedToken]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "verified" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "verifiedToken" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "User_verifiedToken_key" ON "User"("verifiedToken");
