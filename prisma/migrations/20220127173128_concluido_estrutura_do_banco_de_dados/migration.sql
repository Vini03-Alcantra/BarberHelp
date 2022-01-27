-- AlterTable
ALTER TABLE `Client` ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `address` ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `address_client` ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `establishment` ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `owner` ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- CreateTable
CREATE TABLE `Employee` (
    `id` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `cpf` VARCHAR(191) NOT NULL,
    `birthday` VARCHAR(191) NOT NULL,
    `start_hour` VARCHAR(191) NOT NULL,
    `end_hour` VARCHAR(191) NOT NULL,
    `stop_hour_lunch` VARCHAR(191) NOT NULL,
    `return_hour_lunch` VARCHAR(191) NOT NULL,
    `fk_establishment_id` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `Employee_cpf_key`(`cpf`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Services` (
    `id` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `type` VARCHAR(191) NOT NULL,
    `duration` DOUBLE NOT NULL,
    `price` DOUBLE NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `fk_establishment_id` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Ordered` (
    `id` VARCHAR(191) NOT NULL,
    `appointment` DATETIME(3) NOT NULL,
    `appointmentNow` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `fk_client_id` VARCHAR(191) NOT NULL,
    `fk_establishment_id` VARCHAR(191) NOT NULL,
    `fk_employee_id` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Ordered_Services` (
    `id` VARCHAR(191) NOT NULL,
    `fk_id_service` VARCHAR(191) NOT NULL,
    `fk_id_ordered` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Employee` ADD CONSTRAINT `Employee_fk_establishment_id_fkey` FOREIGN KEY (`fk_establishment_id`) REFERENCES `establishment`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Services` ADD CONSTRAINT `Services_fk_establishment_id_fkey` FOREIGN KEY (`fk_establishment_id`) REFERENCES `establishment`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Ordered` ADD CONSTRAINT `Ordered_fk_client_id_fkey` FOREIGN KEY (`fk_client_id`) REFERENCES `Client`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Ordered` ADD CONSTRAINT `Ordered_fk_establishment_id_fkey` FOREIGN KEY (`fk_establishment_id`) REFERENCES `establishment`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Ordered` ADD CONSTRAINT `Ordered_fk_employee_id_fkey` FOREIGN KEY (`fk_employee_id`) REFERENCES `Employee`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Ordered_Services` ADD CONSTRAINT `Ordered_Services_fk_id_service_fkey` FOREIGN KEY (`fk_id_service`) REFERENCES `Services`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Ordered_Services` ADD CONSTRAINT `Ordered_Services_fk_id_ordered_fkey` FOREIGN KEY (`fk_id_ordered`) REFERENCES `Ordered`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
