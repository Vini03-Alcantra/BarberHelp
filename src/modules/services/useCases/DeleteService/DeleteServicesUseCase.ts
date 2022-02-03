import { injectable, inject } from "tsyringe"
import { ServiceRepository } from "../../infra/repositories/ServiceRepository";
import { IServicesRepository } from "../../repositories/IServicesRepository"


@injectable()
class DeleteServicesUseCase {
    constructor(
        @inject("ServiceRepository")
        private serviceRepository: IServicesRepository
    ) { }

    async execute(id: string) {
        const serviceDeleted = await this.serviceRepository.delete(id)

        return serviceDeleted;
    }
}

export { DeleteServicesUseCase }