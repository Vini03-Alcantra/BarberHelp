import { inject, injectable } from "tsyringe";

import { ICreateAddressDTO } from "../../dtos/ICreateAddressDTO";
import { IAddressClientRepository } from "../../../AddressClient/repositories/IAddressClientRepository";

@injectable()
class UpdateAddressUseCase {
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
        }: ICreateAddressDTO
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

export { UpdateAddressUseCase }