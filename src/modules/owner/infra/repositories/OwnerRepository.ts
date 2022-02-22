import { Owner, PrismaClient } from "@prisma/client";
import { compare } from "bcrypt";
import { ICreateOwnerDTO } from "../../dtos/ICreateOwnerDTO";
import { IOwnerRepository } from "../../repositories/IOwnerRepository";
import bcrypt from "bcrypt"
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
        const passwordHash = await bcrypt.hash(password, 10)
        await prisma.owner.create({
            data: {
                nome: nome,
                cpf: cpf,
                birthday: birthday,
                email: email,
                phoneNumber: phoneNumber,
                password: passwordHash
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

    async findByEmailAndPassword(email: string, password: string): Promise<Owner | null> {
        try {            
            const owner = await prisma.owner.findFirst({
                where: {email}
            })
            
            if(!owner){
                return null
            }

            //const passwordMatch = await bcrypt.compare(password, owner.password)
            if(password !== owner.password) {
                return null
            }
            

            // console.log(passwordMatch)
            // if(!(passwordMatch)) return null
            return owner
        } catch (err) {
            console.error(err)
            throw new Error("Operação inválida no momento")
        }
    }
}

export { OwnerRepository }

