import { inject, injectable } from "tsyringe";
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