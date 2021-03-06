import { Ordered } from "@prisma/client";
import { ICreateOrderedDTO } from "../dtos/ICreateOrderedDTO";

interface IOrderedRepository {
    create(service_id: string, data: ICreateOrderedDTO): Promise<void>;
    findById(id: string): Promise<Ordered | null>;
    delete(id: string): Promise<boolean>;
    update(user_id: string, service_id: string, data: ICreateOrderedDTO): Promise<boolean>;
    read(): Promise<Ordered[]>
}

export { IOrderedRepository }