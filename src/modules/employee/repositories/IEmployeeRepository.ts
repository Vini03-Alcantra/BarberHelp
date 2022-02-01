import { Employee } from "@prisma/client";
import { ICreateEmployeeDTO } from "../dtos/ICreateEmployeeDTO";

interface IEmployeeRepository {
    create(id_establishment: string, data: ICreateEmployeeDTO): Promise<void>;
    findByCPF(cpf: string): Promise<Employee | null>;
    findByEmail(email: string): Promise<Employee | null>;
    findById(id: string): Promise<Employee | null>;
    delete(id: string): Promise<boolean>;
    update(user_id: string, data: ICreateEmployeeDTO): Promise<void>;
}

export { IEmployeeRepository }