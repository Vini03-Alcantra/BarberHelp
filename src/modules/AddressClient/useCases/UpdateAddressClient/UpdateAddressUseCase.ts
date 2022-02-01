import { inject, injectable } from "tsyringe";

import { IAddressClientRepository } from "../../repositories/IAddressClientRepository";
import { ICreateAddressClientDTO } from "../../dtos/ICreateAddressClientDTO";

@injectable()
class UpdateAddressUseCase {
    constructor(
        @inject("AddressRepository")
        private addressRepository: IAddressClientRepository
    ) { }
    async execute(
        id: string,
        {
            street,
            number_address,
            complement,
            neighborhood,
            city,
            state,
            cep,
            reference_point
        }: ICreateAddressClientDTO
    ) {
        await this.addressRepository.update(
            id,
            {
                street,
                number_address,
                complement,
                neighborhood,
                city,
                state,
                cep,
                reference_point
            }
        )
    }
}

export { UpdateAddressUseCase }