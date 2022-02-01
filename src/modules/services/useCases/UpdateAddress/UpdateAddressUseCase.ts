import { inject, injectable } from "tsyringe";

import { IAddressRepository } from "../../repositories/IServicesRepository";
import { ICreateAddressDTO } from "../../dtos/ICreateServicesDTO";

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