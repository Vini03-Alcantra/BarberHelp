import { inject, injectable } from "tsyringe";

import { IAddressClientRepository } from "../../repositories/IAddressClientRepository";
import { ICreateAddressClientDTO } from "../../dtos/ICreateAddressClientDTO";

@injectable()
class UpdateAddressClientUseCase {
    constructor(
        @inject("AddressClientRepository")
        private addressClientRepository: IAddressClientRepository
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
        await this.addressClientRepository.update(
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

export { UpdateAddressClientUseCase }