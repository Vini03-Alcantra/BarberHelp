import { inject, injectable } from "tsyringe";
import { ICreateAddressClientDTO } from "../../dtos/ICreateAddressClientDTO";
import { IAddressClientRepository } from "../../repositories/IAddressClientRepository";

@injectable()
class CreateAddressClientUseCase {
    constructor(
        @inject("AddressClientRepository")
        private addressClientRepository: IAddressClientRepository
    ) { }

    async execute({
        street,
        number_address,
        complement,
        neighborhood,
        city,
        state,
        cep,
        reference_point
    }: ICreateAddressClientDTO) {
        await this.addressClientRepository.create({
            street,
            number_address,
            complement,
            neighborhood,
            city,
            state,
            cep,
            reference_point
        })
    }
}

export { CreateAddressClientUseCase }