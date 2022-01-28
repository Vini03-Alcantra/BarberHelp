import { Owner, PrismaClient } from "@prisma/client";
import { ICreateOwnerDTO } from "../../dtos/ICreateOwnerDTO";
import { IOwnerRepository } from "../../repositories/IOwnerRepository";

const prisma = new PrismaClient()

class OwnerRepository implements IOwnerRepository {
    async create({
        nome,
        cpf,
        birthday,
        email,
        phoneNumber,
        password
    }: ICreateOwnerDTO): Promise<void> {
        const owner = await prisma.owner.create({
            data: {
                nome: nome,
                cpf: cpf,
                birthday: birthday,
                email: email,
                phoneNumber: phoneNumber,
                password: password
            }
        })

        console.log("CreateOwner", owner)
    }

    async findByCPF(cpf: string): Promise<Owner | null> {
        const owner = await prisma.owner.findFirst({
            where: { cpf }
        })

        return owner
    }

    async findByEmail(email: string): Promise<Owner | null> {
        const owner = await prisma.owner.findFirst({
            where: { email }
        })

        return owner
    }

}

export { OwnerRepository }

