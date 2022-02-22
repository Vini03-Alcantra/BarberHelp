import { injectable, inject } from "tsyringe"
import { IAddressClientRepository } from "../../repositories/IAddressClientRepository";



@injectable()
class DeleteAddressClientUseCase {
    constructor(
        @inject("AddressClientRepository")
        private addressClientRepository: IAddressClientRepository
    ) { }

    async execute(id: string) {
        const addressDeleted = await this.addressClientRepository.delete(id)

        return addressDeleted;
    }
}

export { DeleteAddressClientUseCase }