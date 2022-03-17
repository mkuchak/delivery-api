/*
  Warnings:

  - You are about to drop the column `end_date` on the `deliveries` table. All the data in the column will be lost.
  - You are about to drop the column `start_date` on the `deliveries` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "deliveries" DROP COLUMN "end_date",
DROP COLUMN "start_date",
ADD COLUMN     "delivered_at" TIMESTAMP(3),
ADD COLUMN     "started_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
