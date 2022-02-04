import { Address, PrismaClient } from "@prisma/client";
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
        } catch (error) {
            console.error(error)
        }


    }


    async findById(id: string): Promise<Address | null> {
        const address = await prisma.addressClient.findFirst({
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
    }: ICreateAddressClientDTO): Promise<void> {
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



    }

    async delete(id: string): Promise<boolean> {
        const address = await prisma.addressClient.findFirst({
            where: { id }
        })

        if (!(address)) {
            return false
        }

        try {
            const addressDeleted = await prisma.addressClient.delete({
                where: { id }
            })
            console.log(addressDeleted)

            return true
        } catch (err) {
            console.log(err)

            return false
        }


    }
}

export { AddressClientRepository }