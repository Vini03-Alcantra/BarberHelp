import { inject, injectable } from "tsyringe";

import { IServicesRepository } from "../../repositories/IServicesRepository";
import { ICreateServicesDTO } from "../../dtos/ICreateServicesDTO";

@injectable()
class UpdateServiceUseCase {
    constructor(
        @inject("ServiceRepository")
        private serviceRepository: IServicesRepository
    ) { }

    async execute(
        id: string,
        {
            nome,
            type,
            duration,
            price,
            description,
            id_establishment
        }: ICreateServicesDTO) {
        await this.serviceRepository.update(
            id,
            {
                nome,
                type,
                duration,
                price,
                description,
                id_establishment
            })
    }
}

export { UpdateServiceUseCase }