import { Employee, PrismaClient } from "@prisma/client";
import { logger } from "../../../../logger";
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
        } catch (error) {
            logger.info(error)
            if (error instanceof Error) {                
                throw new Error(error.message)
            }
            throw new Error("Error")
        }
    }

    async read(): Promise<Employee[]> {        
        try {
            const employers = await prisma.employee.findMany()
    
            return employers            
        } catch (error) {
            logger.info(error)
            if (error instanceof Error) {                
                throw new Error(error.message)
            }
            throw new Error("Error")
        }
    }

    async findByCPF(cpf: string): Promise<Employee | null> {
        try {
            const employee = await prisma.employee.findFirst({
                where: { cpf }
            })
    
            return employee            
        } catch (error) {
            logger.info(error)
            if (error instanceof Error) {                
                throw new Error(error.message)
            }
            throw new Error("Error")
        }
    }

    async findByEmail(email: string): Promise<Employee | null> {
        try {
            const employee = await prisma.employee.findFirst({
                where: { email }
            })
    
            return employee            
        } catch (error) {
            logger.info(error)
            if (error instanceof Error) {                
                throw new Error(error.message)
            }
            throw new Error("Error")
        }
    }

    async findById(id: string): Promise<Employee | null> {
        try {
            const employee = await prisma.employee.findFirst({
                where: { id }
            })
    
            return employee            
        } catch (error) {
            logger.info(error)
            if (error instanceof Error) {                
                throw new Error(error.message)
            }
            throw new Error("Error")
        }
    }

    async delete(id: string): Promise<boolean> {
        try {
            const employee = await this.findById(id)
    
            if (!(employee)) {
                return false
            }
    
            await prisma.employee.delete({
                where: { id }
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
        cpf,
        email,
        phoneNumber,
        birthday,
        start_hour,
        end_hour,
        stop_hour_lunch,
        return_hour_lunch
    }: ICreateEmployeeDTO): Promise<void> {
        try {
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
        } catch (error) {
            logger.info(error)
            if (error instanceof Error) {                
                throw new Error(error.message)
            }
            throw new Error("Error")
        }
    }

}

export { EmployeeRepository }