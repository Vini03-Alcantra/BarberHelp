import { Client, Owner, PrismaClient } from "@prisma/client";
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
        console.log(nome,
            email,
            cpf,
            birthday,
            phoneNumber,
            password,
            id_address
        )
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
        console.log(result)
    }

    async findByCPF(cpf: string): Promise<Client | null> {
        const client = await prisma.client.findFirst({
            where: { cpf }
        })

        return client
    }

    findByEmail(email: string): Promise<Client | null> {
        throw new Error("Method not implemented.");
    }

    findById(id: string): Promise<Omit<ICreateClientDTO, "password"> | null> {
        throw new Error("Method not implemented.");
    }

    delete(email: string, password: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

    update(user_id: string, data: Omit<ICreateClientDTO, "password">): Promise<void> {
        throw new Error("Method not implemented.");
    }

}

export { ClientRepository }