import { Owner, PrismaClient } from "@prisma/client";
import { compare } from "bcrypt";
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
        await prisma.owner.create({
            data: {
                nome: nome,
                cpf: cpf,
                birthday: birthday,
                email: email,
                phoneNumber: phoneNumber,
                password: password
            }
        })
    }

    async findByCPF(cpf: string): Promise<Owner | null> {
        const owner = await prisma.owner.findFirst({
            where: { cpf },
        })

        return owner
    }

    async findByEmail(email: string): Promise<Owner | null> {
        const owner = await prisma.owner.findFirst({
            where: { email }
        })

        return owner
    }

    async findById(id: string): Promise<Omit<ICreateOwnerDTO, "password"> | null> {
        const owner = await prisma.owner.findFirst({
            where: { id },
        })

        if (!(owner)) {
            return null
        }

        const nome = owner.nome;
        const email = owner.email;
        const phoneNumber = owner.phoneNumber;
        const cpf = owner.cpf;
        const birthday = owner.birthday;

        const ownerRes = {
            nome,
            email,
            phoneNumber,
            cpf,
            birthday
        }

        return ownerRes
    }

    async delete(email: string, password: string): Promise<boolean> {
        const Owner = await prisma.owner.findFirst({
            where: { email }
        })

        if (!(Owner)) {
            return false
        }

        const passwordOwner = await compare(password, Owner.password)

        if (!(passwordOwner)) {
            return false
        }

        await prisma.owner.delete({
            where: { id: Owner.id }
        })

        return true

    }

    async update(user_id: string, {
        nome,
        cpf,
        birthday,
        email,
        phoneNumber
    }: ICreateOwnerDTO): Promise<void> {
        const id = await this.findById(user_id)

        if (!(id)) {
            return
        }

        await prisma.owner.update({
            where: {
                id: user_id,
            },
            data: {
                nome,
                cpf,
                birthday,
                email,
                phoneNumber,
                updated_at: new Date()
            }
        })
    }

}

export { OwnerRepository }
