import { inject, injectable } from "tsyringe";
import { ICreateEstablishmentDTO } from "../../dtos/ICreateEstablishmentDTO";
import { IEstablishmentRepository } from "../../repositories/IEstablishmentRepository";

@injectable()
class ReadEstablishmentUseCase {
    constructor(
        @inject("EstablishmentRepository")
        private establishmentRepository: IEstablishmentRepository
    ) { }

    async execute(id: string) {
        const establishment = await this.establishmentRepository.findById(id)

        return establishment;
    }
}

export { ReadEstablishmentUseCase }