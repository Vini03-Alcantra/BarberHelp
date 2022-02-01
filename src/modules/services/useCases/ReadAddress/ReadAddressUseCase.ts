import { inject, injectable } from "tsyringe";
import { IAddressRepository } from "../../repositories/IServicesRepository";

@injectable()
class ReadAddressUseCase {
    constructor(
        @inject("AddressRepository")
        private addressRepository: IAddressRepository
    ) { }

    async execute(id: string) {
        const address = this.addressRepository.findById(id)

        return address
    }
}

export { ReadAddressUseCase }