import { Client, PrismaClient } from "@prisma/client";
import { compare } from "bcrypt";
import { logger } from "../../../logger";
import { ICreateClientDTO } from "../dtos/ICreateClient";
import { IClientRepository } from "../repositories/IClientRepository";

const prisma = new PrismaClient()

interface IResponseID {
    nome: string;
    email: string;
    cpf: string;
    birthday: string;
    phoneNumber: string;
}
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
        } catch (error) {
            logger.info(error)
            if (error instanceof Error) {                
                throw new Error(error.message)
            }
            throw new Error("Error")
        }
    }

    async findByCPF(cpf: string): Promise<Client | null> {
        try {
            const client = await prisma.client.findFirst({
                where: { cpf }
            })
    
            return client            
        } catch (error) {
            logger.info(error)
            if (error instanceof Error) {                
                throw new Error(error.message)
            }
            throw new Error("Error")
        }
    }

    async findByEmail(email: string): Promise<Client | null> {        
        try {
            const client = await prisma.client.findFirst({
                where: {email}
            })
    
            return client            
        } catch (error) {
            logger.info(error)
            if (error instanceof Error) {                
                throw new Error(error.message)
            }
            throw new Error("Error")
        }
    }

    async findById(id: string): Promise<Omit<ICreateClientDTO, "password"> | null> {
        
        try {
            const client = await prisma.client.findFirst({
                where: { id }
            })
    
            if(!client){
                return null
            }
    
            const clientReturn: IResponseID = {
                nome: client.nome,
                email: client.email,
                cpf: client.cpf,
                birthday: client.birthday,
                phoneNumber: client.phoneNumber,
            }
    
            return clientReturn            
        } catch (error) {
            logger.info(error)
            if (error instanceof Error) {                
                throw new Error(error.message)
            }
            throw new Error("Error")
        }
    }

    async delete(email: string, password: string): Promise<boolean> {        
        try {
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
        } catch (error) {
            logger.info(error)
            if (error instanceof Error) {                
                throw new Error(error.message)
            }
            throw new Error("Error")
        }
    }

    async update(user_id: string, {
        nome,
        email,
        cpf,
        birthday,
        phoneNumber
    }: Omit<ICreateClientDTO, "password">): Promise<void> {
        
        try {
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
        } catch (error) {
            logger.info(error)
            if (error instanceof Error) {                
                throw new Error(error.message)
            }
            throw new Error("Error")
        }
    }

}

export { ClientRepository }