/*
  Warnings:

  - You are about to drop the column `appointmentNow` on the `ordered` table. All the data in the column will be lost.
  - You are about to alter the column `appointment` on the `ordered` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `DateTime(3)`.

*/
-- AlterTable
ALTER TABLE `ordered` DROP COLUMN `appointmentNow`,
    MODIFY `appointment` DATETIME(3) NOT NULL;
