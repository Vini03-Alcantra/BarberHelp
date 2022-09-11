import { Ordered } from "@prisma/client";
import { ICreateOrderedDTO } from "../dtos/ICreateOrderedDTO";

interface IOrderedRepository {
    create(data: ICreateOrderedDTO): Promise<void>;
    findById(id: string): Promise<Ordered | null>;
    delete(id: string): Promise<boolean>;
    update(user_id: string, service_id: string, data: ICreateOrderedDTO): Promise<boolean>;
    read(): Promise<Ordered[]>;
    readAllOrdereds(): Promise<Ordered[]>;
    readOnlyOrderedsFalse(): Promise<Ordered[]>;
    updateConfirmed(idOrdered: string, confirm: boolean): Promise<void>;
    updateDone(idOrdered: string): Promise<void>
}

export { IOrderedRepository }