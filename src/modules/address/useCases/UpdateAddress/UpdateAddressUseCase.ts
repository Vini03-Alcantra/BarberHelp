import { inject, injectable } from "tsyringe";

import { IAddressRepository } from "../../repositories/IAddressRepository";
import { ICreateAddressDTO } from "../../dtos/ICreateAddressDTO";

@injectable()
class UpdateAddressUseCase {
    constructor(
        @inject("AddressRepository")
        private addressRepository: IAddressRepository
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
        }: ICreateAddressDTO
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