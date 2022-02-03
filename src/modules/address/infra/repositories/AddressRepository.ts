import { Address, PrismaClient } from "@prisma/client";
import { ICreateAddressDTO } from "../../dtos/ICreateAddressDTO";
import { IAddressRepository } from "../../repositories/IAddressRepository";

const prisma = new PrismaClient()

class AddressRepository implements IAddressRepository {
    async create({
        street,
        number_address,
        complement,
        neighborhood,
        city,
        state,
        cep,
        reference_point
    }: ICreateAddressDTO): Promise<void> {
        try {
            await prisma.address.create({
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
        } catch (error) {
            console.error(error)
        }


    }

    async findById(id: string): Promise<Address | null> {
        const address = await prisma.address.findFirst({
            where: { id }
        })

        return address
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
    }: ICreateAddressDTO): Promise<void> {
        const address = await prisma.address.update({
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



    }

    async delete(id: string): Promise<boolean> {
        const address = await prisma.address.findFirst({
            where: { id }
        })

        if (!(address)) {
            return false
        }

        const addressDeleted = await prisma.address.delete({
            where: { id }
        })

        if (!(addressDeleted)) {
            return false
        }

        return true
    }
}

export { AddressRepository }