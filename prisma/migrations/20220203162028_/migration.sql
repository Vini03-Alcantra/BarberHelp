/*
  Warnings:

  - You are about to drop the column `created_at` on the `establishment` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `establishment` DROP COLUMN `created_at`,
    ADD COLUMN `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `stop_hour_lunch` VARCHAR(191) NULL,
    MODIFY `return_hour_lunch` VARCHAR(191) NULL;
