import { Client } from "@prisma/client";
import { ICreateClientDTO } from "../dtos/ICreateClient";

interface IClientRepository {
    create(id_address: string, data: ICreateClientDTO): Promise<void>;
    findByCPF(cpf: string): Promise<Client | null>;
    findByEmail(email: string): Promise<Client | null>;
    findById(id: string): Promise<Omit<ICreateClientDTO, "password"> | null>;
    delete(email: string, password: string): Promise<boolean>;
    update(user_id: string, data: Omit<ICreateClientDTO, "password">): Promise<void>;
}

export { IClientRepository }