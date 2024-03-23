/*
  Warnings:

  - You are about to drop the column `visites` on the `Form` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Form" DROP COLUMN "visites",
ADD COLUMN     "visits" INTEGER NOT NULL DEFAULT 0;
