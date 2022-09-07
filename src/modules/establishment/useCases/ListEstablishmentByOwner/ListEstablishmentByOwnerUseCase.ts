import { inject } from "tsyringe";
import { IEstablishmentRepository } from "../../repositories/IEstablishmentRepository";


class ListEstablishmentByOwnerUseCase {
    constructor(
        @inject("EstablishmentRepository")
        private establishmentRepository: IEstablishmentRepository
    ) { }

    async execute(owner_id: string){
        
    }
}

export {ListEstablishmentByOwnerUseCase}