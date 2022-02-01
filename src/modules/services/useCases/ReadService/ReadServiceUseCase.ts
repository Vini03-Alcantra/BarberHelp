import { inject, injectable } from "tsyringe";
import { IServicesRepository } from "../../repositories/IServicesRepository";

@injectable()
class ReadServiceUseCase {
    constructor(
        @inject("ServiceRepository")
        private serviceRepository: IServicesRepository
    ) { }

    async execute(id: string) {
        const address = this.serviceRepository.findById(id)

        return address
    }
}

export { ReadServiceUseCase }