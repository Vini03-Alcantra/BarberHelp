/*
  Warnings:

  - You are about to drop the column `register_system` on the `Client` table. All the data in the column will be lost.
  - You are about to alter the column `birthday` on the `Client` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `DateTime(3)`.

*/
-- AlterTable
ALTER TABLE `Client` DROP COLUMN `register_system`,
    MODIFY `birthday` DATETIME(3) NOT NULL,
    MODIFY `lastCut` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3);
