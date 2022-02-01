import { inject, injectable } from "tsyringe";
import { IServicesRepository } from "../../repositories/IServicesRepository";

@injectable()
class ReadServiceUseCase {
    constructor(
        @inject("ServiceRepository")
        private serviceRepository: IServicesRepository
    ) { }

    async execute() {
        const address = this.serviceRepository.read()

        return address
    }
}

export { ReadServiceUseCase }