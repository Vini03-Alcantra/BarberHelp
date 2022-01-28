import { Owner } from "@prisma/client";
import { ICreateOwnerDTO } from "../dtos/ICreateOwnerDTO";

interface IOwnerRepository {
    create(data: ICreateOwnerDTO): Promise<void>;
    findByCPF(cpf: string): Promise<Owner | null>;
    findByEmail(email: string): Promise<Owner | null>
    delete(email: string, password: string): Promise<boolean>
}

export { IOwnerRepository }