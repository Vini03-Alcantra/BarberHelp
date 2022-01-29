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
            const result = await prisma.address.create({
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
    update(id: string, data: ICreateAddressDTO): Promise<void> {
        throw new Error("Method not implemented.");
    }
    delete(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
}

export { AddressRepository }