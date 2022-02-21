import { Owner } from "@prisma/client";
import { ICreateOwnerDTO } from "../dtos/ICreateOwnerDTO";

interface IOwnerRepository {
    create(data: ICreateOwnerDTO): Promise<void>;
    findByCPF(cpf: string): Promise<Owner | null>;
    findByEmail(email: string): Promise<Owner | null>;
    findById(id: string): Promise<Omit<ICreateOwnerDTO, "password"> | null>;
    delete(email: string, password: string): Promise<boolean>;
    update(user_id: string, data: Omit<ICreateOwnerDTO, "password">): Promise<void>;
    findByEmailAndPassword(email: String, password: String): Promise<Owner | null>;
}

export { IOwnerRepository }