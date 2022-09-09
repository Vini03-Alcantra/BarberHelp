/*
  Warnings:

  - Added the required column `closing_time` to the `Ordered` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `ordered` ADD COLUMN `closing_time` DATETIME(3) NOT NULL;
