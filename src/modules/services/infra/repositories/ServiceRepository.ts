import { Services, PrismaClient } from "@prisma/client";
import { logger } from "../../../../logger";
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
            logger.info(error)
            if (error instanceof Error) {                
                throw new Error(error.message)
            }
            throw new Error("Error")
        }


    }

    async read(): Promise<Services[]> {
        try {            
            const result = await prisma.services.findMany()
    
            return result
        } catch (error) {
            logger.info(error)
            if (error instanceof Error) {                
                throw new Error(error.message)
            }
            throw new Error("Error")
        }
    }

    async findById(id: string): Promise<Services | null> {
        try {            
            const services = await prisma.services.findFirst({
                where: { id }
            })
    
            return services
        } catch (error) {
            logger.info(error)
            if (error instanceof Error) {                
                throw new Error(error.message)
            }
            throw new Error("Error")
        }
    }

    async update(address_id: string, {
        nome,
        type,
        duration,
        price,
        description,
        id_establishment
    }: ICreateServicesDTO): Promise<void> {
        try {
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
        } catch (error) {
            logger.info(error)
            if (error instanceof Error) {                
                throw new Error(error.message)
            }
            throw new Error("Error")
        }        
    }

    async delete(id: string): Promise<boolean> {
        try {
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
        } catch (error) {
            logger.info(error)
            if (error instanceof Error) {                
                throw new Error(error.message)
            }
            throw new Error("Error")
        }        
    }
}

export { ServiceRepository }