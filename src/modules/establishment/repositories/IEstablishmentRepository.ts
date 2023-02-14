import { Establishment } from "@prisma/client";
import { ICreateEstablishmentDTO } from "../dtos/ICreateEstablishmentDTO"


interface IEstablishmentRepository {
    create(fk_id_address: string, fk_id_owner: string, data: ICreateEstablishmentDTO): Promise<void>;
    findById(id: string): Promise<Establishment | null>;
    update(id: string, data: ICreateEstablishmentDTO): Promise<void>;
    delete(id: string): Promise<boolean>;
    listEstablishmentByOwner(owner_id: string): Promise<Establishment[]>
    // listTodayTime(idEstablishment: string): Promise<string>
}

export { IEstablishmentRepository }