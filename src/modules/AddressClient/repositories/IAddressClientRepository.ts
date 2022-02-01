import { AddressClient } from "@prisma/client";
import { ICreateAddressClientDTO } from "../dtos/ICreateAddressClientDTO";

interface IAddressClientRepository {
    create(data: ICreateAddressClientDTO): Promise<void>;
    findById(id: string): Promise<AddressClient | null>;
    update(id: string, data: ICreateAddressClientDTO): Promise<void>;
    delete(id: string): Promise<boolean>;
}

export { IAddressClientRepository }