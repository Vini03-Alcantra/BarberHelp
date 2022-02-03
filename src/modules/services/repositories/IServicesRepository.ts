import { Services } from "@prisma/client";
import { ICreateServicesDTO } from "../dtos/ICreateServicesDTO";

interface IServicesRepository {
    create(data: ICreateServicesDTO): Promise<void>;
    findById(id: string): Promise<Services | null>;
    update(id: string, data: ICreateServicesDTO): Promise<void>;
    delete(id: string): Promise<boolean>;
    read(): Promise<Services[]>
}

export { IServicesRepository }