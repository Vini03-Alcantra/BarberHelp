import { Client, PrismaClient } from "@prisma/client";
import { compare } from "bcrypt";
import { ICreateClientDTO } from "../dtos/ICreateClient";
import { IClientRepository } from "../repositories/IClientRepository";

const prisma = new PrismaClient()


class ClientRepository implements IClientRepository {
    async create(
        id_address: string,
        {
            nome,
            email,
            cpf,
            birthday,
            phoneNumber,
            password,
        }: ICreateClientDTO): Promise<void> {
        try {
            const result = await prisma.client.create({
                data: {
                    nome: nome,
                    email: email,
                    cpf: cpf,
                    phoneNumber: phoneNumber,
                    birthday: birthday,
                    password: password,
                    fk_id_address: id_address
                }
            })
        } catch (err) {
            console.error(err)
        }
    }

    async findByCPF(cpf: string): Promise<Client | null> {
        const client = await prisma.client.findFirst({
            where: { cpf }
        })

        return client
    }

    async findByEmail(email: string): Promise<Client | null> {
        const client = await prisma.client.findFirst({
            where: {email}
        })

        return client
    }

    async findById(id: string): Promise<Omit<ICreateClientDTO, "password"> | null> {
        const client = await prisma.client.findFirst({
            where: { id }
        })

        return client
    }

    async delete(email: string, password: string): Promise<boolean> {        
        const client = await prisma.client.findFirst({
            where: { email }
        })

        if (!(client)) {
            return false
        }

        const passwordClient = compare(password, client.password)

        if (!(passwordClient)) {
            return false
        }

        await prisma.client.delete({
            where: { id: client.id }
        })

        return true
    }

    async update(user_id: string, {
        nome,
        email,
        cpf,
        birthday,
        phoneNumber
    }: Omit<ICreateClientDTO, "password">): Promise<void> {
        const id = await this.findById(user_id)

        if (!(id)) {
            throw new Error("ID don't fond")
        }

        await prisma.client.update({
            where: {
                id: user_id
            },
            data: {
                nome,
                email,
                cpf,
                birthday,
                phoneNumber,
                updated_at: new Date()
            }
        })
    }

}

export { ClientRepository }