import { Services, PrismaClient } from "@prisma/client";
import { ICreateServicesDTO } from "../../dtos/ICreateServicesDTO";
import { IServicesRepository } from "../../repositories/IServicesRepository";

const prisma = new PrismaClient()

class ServiceRepository implements IServicesRepository {
    async create({
        nome,
        type,
        duration,
        price,
        description,
        id_establishment
    }: ICreateServicesDTO): Promise<void> {
        try {
            await prisma.services.create({
                data: {
                    nome,
                    type,
                    duration,
                    price,
                    description,
                    fk_establishment_id: id_establishment
                }
            })
        } catch (error) {
            console.error(error)
        }


    }

    async read(): Promise<Services[]> {
        const result = await prisma.services.findMany()

        return result
    }

    async findById(id: string): Promise<Services | null> {
        const services = await prisma.services.findFirst({
            where: { id }
        })

        return services
    }

    async update(address_id: string, {
        nome,
        type,
        duration,
        price,
        description,
        id_establishment
    }: ICreateServicesDTO): Promise<void> {
        const services = await prisma.services.update({
            where: {
                id: address_id
            },
            data: {
                nome,
                type,
                duration,
                price,
                description,
                fk_establishment_id: id_establishment,
                updated_at: new Date()
            }
        })

        if (!(services)) {
            return
        }
    }

    async delete(id: string): Promise<boolean> {
        const services = await prisma.services.findFirst({
            where: { id }
        })

        if (!(services)) {
            return false
        }

        const serviceDeleted = await prisma.services.delete({
            where: { id }
        })

        if (!(serviceDeleted)) {
            return false
        }

        return true
    }
}

export { ServiceRepository }