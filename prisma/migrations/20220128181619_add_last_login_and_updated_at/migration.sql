-- AlterTable
ALTER TABLE `owner` ADD COLUMN `lastLogin` VARCHAR(191) NULL,
    ADD COLUMN `updated_at` DATETIME(3) NULL;
