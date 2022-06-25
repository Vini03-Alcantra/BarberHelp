import { inject, injectable } from "tsyringe";
import { IEstablishmentRepository } from "../../repositories/IEstablishmentRepository";
import {IEstablishmentOrderedPendingDTO} from "../../dtos/IEstablishmentOrderedPendingDTO"

@injectable()
class ListOrderedPendingUseCase {
    constructor(
        @inject("EstablishmentRepository")
        private establishmentRepository: IEstablishmentRepository
    ) { }

    async execute({
       establishment_id
    }: IEstablishmentOrderedPendingDTO) {

    }
}