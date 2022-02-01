import { Employee, PrismaClient } from "@prisma/client";
import { ICreateEmployeeDTO } from "../../dtos/ICreateEmployeeDTO";
import { IEmployeeRepository } from "../../repositories/IEmployeeRepository";

const prisma = new PrismaClient()

class EmployeeRepository implements IEmployeeRepository {
    async create(
        id_establishment: string, {
            nome,
            email,
            phoneNumber,
            cpf,
            birthday,
            start_hour,
            end_hour,
            stop_hour_lunch,
            return_hour_lunch
        }: ICreateEmployeeDTO): Promise<void> {
        try {
            await prisma.employee.create({
                data: {
                    nome,
                    email,
                    phoneNumber,
                    cpf,
                    birthday,
                    start_hour,
                    end_hour,
                    stop_hour_lunch,
                    return_hour_lunch,
                    fk_establishment_id: id_establishment
                }
            })
        } catch (err) {
            console.log("Erro employee", err)
        }
    }

    async read(): Promise<Employee[]> {
        const employers = await prisma.employee.findMany()

        return employers
    }

    async findByCPF(cpf: string): Promise<Employee | null> {
        const employee = await prisma.employee.findFirst({
            where: { cpf }
        })

        return employee
    }
    async findByEmail(email: string): Promise<Employee | null> {
        const employee = await prisma.employee.findFirst({
            where: { email }
        })

        return employee
    }

    async findById(id: string): Promise<Employee | null> {
        const employee = await prisma.employee.findFirst({
            where: { id }
        })

        return employee
    }

    async delete(id: string): Promise<boolean> {
        const employee = await this.findById(id)

        if (!(employee)) {
            return false
        }

        await prisma.employee.delete({
            where: { id }
        })

        return true
    }

    async update(user_id: string, {
        nome,
        cpf,
        email,
        phoneNumber,
        birthday,
        start_hour,
        end_hour,
        stop_hour_lunch,
        return_hour_lunch
    }: ICreateEmployeeDTO): Promise<void> {
        const employee = await this.findById(user_id)

        if (!(employee)) {
            return
        }

        const result = await prisma.employee.update({
            where: { id: user_id },
            data: {
                nome,
                cpf,
                email,
                phoneNumber,
                birthday,
                start_hour,
                end_hour,
                stop_hour_lunch,
                return_hour_lunch
            }
        })

        if (!(result)) {
            return
        }
    }

}

export { EmployeeRepository }