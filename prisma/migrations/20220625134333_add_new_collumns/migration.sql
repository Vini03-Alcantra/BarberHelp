-- AlterTable
ALTER TABLE `ordered` ADD COLUMN `confirmed` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `finish` BOOLEAN NOT NULL DEFAULT false;
