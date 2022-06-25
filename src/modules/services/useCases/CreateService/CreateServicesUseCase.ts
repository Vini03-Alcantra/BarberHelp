import { inject, injectable } from "tsyringe";
import { ICreateServicesDTO } from "../../dtos/ICreateServicesDTO";
import { IServicesRepository } from "../../repositories/IServicesRepository";

@injectable()
class CreateServicesUseCase {
    constructor(
        @inject("ServiceRepository")
        private serviceRepository: IServicesRepository
    ) { }

    async execute({
        nome,
        type,
        duration,
        price,
        description,
        id_establishment
    }: ICreateServicesDTO) {
        await this.serviceRepository.create({
            nome,
            type,
            duration,
            price,
            description,
            id_establishment
        })
    }
}

export { CreateServicesUseCase }