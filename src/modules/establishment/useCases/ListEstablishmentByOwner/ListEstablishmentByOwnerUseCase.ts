import { inject } from "tsyringe";
import { IEstablishmentRepository } from "../../repositories/IEstablishmentRepository";


class ListEstablishmentByOwnerUseCase {
    constructor(
        @inject("EstablishmentRepository")
        private establishmentRepository: IEstablishmentRepository
    ) { }

    async execute(owner_id: string){
        try {
            const establishmentOfOwner = await this.establishmentRepository.listEstablishmentByOwner(owner_id)
            return establishmentOfOwner
        } catch (error) {
            return error
        }
    }
}

export {ListEstablishmentByOwnerUseCase}