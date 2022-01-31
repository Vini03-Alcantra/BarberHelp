/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `Client` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `email` to the `Client` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Client` DROP FOREIGN KEY `Client_fk_id_address_fkey`;

-- AlterTable
ALTER TABLE `Client` ADD COLUMN `email` VARCHAR(191) NOT NULL,
    MODIFY `fk_id_address` VARCHAR(191) NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Client_email_key` ON `Client`(`email`);

-- AddForeignKey
ALTER TABLE `Client` ADD CONSTRAINT `Client_fk_id_address_fkey` FOREIGN KEY (`fk_id_address`) REFERENCES `address_client`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
