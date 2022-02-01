import { inject, injectable } from "tsyringe";
import { IAddressClientRepository } from "../../repositories/IAddressClientRepository";


@injectable()
class ReadAddressClientUseCase {
    constructor(
        @inject("AddressClientRepository")
        private addressClientRepository: IAddressClientRepository
    ) { }

    async execute(id: string) {
        const address = this.addressClientRepository.findById(id)

        return address
    }
}

export { ReadAddressClientUseCase }