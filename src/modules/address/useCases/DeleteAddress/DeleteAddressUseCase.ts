import { injectable, inject } from "tsyringe"
import { IAddressRepository } from "../../repositories/IAddressRepository"


@injectable()
class DeleteAddressUseCase {
    constructor(
        @inject("AddressRepository")
        private addressRepository: IAddressRepository
    ) { }

    async execute(id: string) {
        const addressDeleted = await this.addressRepository.delete(id)

        return addressDeleted;
    }
}

export { DeleteAddressUseCase }