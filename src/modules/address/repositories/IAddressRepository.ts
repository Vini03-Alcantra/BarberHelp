import { Address } from "@prisma/client";
import { ICreateAddressDTO } from "../dtos/ICreateAddressDTO";

interface IAddressRepository {
    create(data: ICreateAddressDTO): Promise<void>;
    findById(id: string): Promise<Address | null>;
    update(id: string, data: ICreateAddressDTO): Promise<void>;
    delete(id: string): Promise<boolean>;
}

export { IAddressRepository }