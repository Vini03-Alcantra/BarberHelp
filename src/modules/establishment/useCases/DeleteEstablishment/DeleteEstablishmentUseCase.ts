import { inject, injectable } from "tsyringe";
import { ICreateEstablishmentDTO } from "../../dtos/ICreateEstablishmentDTO";
import { IEstablishmentRepository } from "../../repositories/IEstablishmentRepository";

@injectable()
class DeleteEstablishmentUseCase {
    constructor(
        @inject("EstablishmentRepository")
        private establishmentRepository: IEstablishmentRepository
    ) { }

    async execute(id: string) {
        const result = await this.establishmentRepository.delete(id)
        return result
    }
}

export { DeleteEstablishmentUseCase }