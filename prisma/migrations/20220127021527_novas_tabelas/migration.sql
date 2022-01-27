/*
  Warnings:

  - Added the required column `password` to the `owner` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `address` MODIFY `complement` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `address_client` MODIFY `complement` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `owner` ADD COLUMN `password` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `establishment` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `phoneContact` VARCHAR(191) NOT NULL,
    `email_contact` VARCHAR(191) NOT NULL,
    `start_hour` VARCHAR(191) NOT NULL,
    `end_hour` VARCHAR(191) NOT NULL,
    `stop_hour_lunch` VARCHAR(191) NOT NULL,
    `return_hour_lunch` VARCHAR(191) NOT NULL,
    `register_system` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `fk_owner_id` VARCHAR(191) NOT NULL,
    `fk_id_address` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `establishment_email_contact_key`(`email_contact`),
    UNIQUE INDEX `establishment_fk_id_address_key`(`fk_id_address`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Client` (
    `id` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `cpf` VARCHAR(191) NOT NULL,
    `birthday` DATETIME(3) NOT NULL,
    `lastCut` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `phoneNumber` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `register_system` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `fk_id_address` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Client_cpf_key`(`cpf`),
    UNIQUE INDEX `Client_fk_id_address_key`(`fk_id_address`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `establishment` ADD CONSTRAINT `establishment_fk_owner_id_fkey` FOREIGN KEY (`fk_owner_id`) REFERENCES `owner`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `establishment` ADD CONSTRAINT `establishment_fk_id_address_fkey` FOREIGN KEY (`fk_id_address`) REFERENCES `address`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Client` ADD CONSTRAINT `Client_fk_id_address_fkey` FOREIGN KEY (`fk_id_address`) REFERENCES `address_client`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
