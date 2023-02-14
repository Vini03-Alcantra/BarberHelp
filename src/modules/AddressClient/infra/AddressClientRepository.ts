import { Address, PrismaClient } from "@prisma/client";
import { logger } from "../../../logger";
import { ICreateAddressClientDTO } from "../dtos/ICreateAddressClientDTO";
import { IAddressClientRepository } from "../repositories/IAddressClientRepository";

const prisma = new PrismaClient()

class AddressClientRepository implements IAddressClientRepository {
    async create({
        street,
        number_address,
        complement,
        neighborhood,
        city,
        state,
        cep,
        reference_point
    }: ICreateAddressClientDTO): Promise<void> {
        try {
            await prisma.addressClient.create({
                data: {
                    street,
                    number_address,
                    complement,
                    neighborhood,
                    city,
                    state,
                    cep,
                    reference_point
                }
            })
        }  catch (error) {
            logger.info(error)
            if (error instanceof Error) {                
                throw new Error(error.message)
            }
            throw new Error("Error")
        }


    }


    async findById(id: string): Promise<Address | null> {
        try {
            const address = await prisma.addressClient.findFirst({
                where: { id }
            })
    
            return address            
        } catch (error) {
            logger.info(error)
            if (error instanceof Error) {                
                throw new Error(error.message)
            }
            throw new Error("Error")
        }
    }

    async update(address_id: string, {
        street,
        number_address,
        complement,
        neighborhood,
        city,
        state,
        cep,
        reference_point
    }: ICreateAddressClientDTO): Promise<void> {        
        try {
            const address = await prisma.addressClient.update({
                where: {
                    id: address_id
                },
                data: {
                    street,
                    number_address,
                    complement,
                    neighborhood,
                    city,
                    state,
                    cep,
                    reference_point,
                    updated_at: new Date()
                }
            })
    
            if (!(address)) {
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
            const address = await prisma.addressClient.findFirst({
                where: { id }
            })
        
            if (!(address)) {
                return false
            }
            const addressDeleted = await prisma.addressClient.delete({
                where: { id }
            })            
    
            if (!addressDeleted) {
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

export { AddressClientRepository }