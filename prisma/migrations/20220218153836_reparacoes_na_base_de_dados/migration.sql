/*
  Warnings:

  - You are about to drop the column `register_system` on the `establishment` table. All the data in the column will be lost.
  - You are about to drop the column `register_system` on the `owner` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `address` MODIFY `created_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `address_client` MODIFY `created_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `client` MODIFY `birthday` VARCHAR(191) NOT NULL,
    MODIFY `created_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `employee` ADD COLUMN `updated_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `created_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `establishment` DROP COLUMN `register_system`,
    ADD COLUMN `created_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `updated_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `ordered` MODIFY `appointmentNow` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `created_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `updated_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `owner` DROP COLUMN `register_system`,
    MODIFY `created_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `services` MODIFY `created_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `updated_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3);
