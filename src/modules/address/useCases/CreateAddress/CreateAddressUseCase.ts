import { inject, injectable } from "tsyringe";
import { ICreateAddressDTO } from "../../dtos/ICreateAddressDTO";
import { IAddressRepository } from "../../repositories/IAddressRepository";

@injectable()
class CreateAddressUseCase {
    constructor(
        @inject("AddressRepository")
        private addressRepository: IAddressRepository
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
    }: ICreateAddressDTO) {
        await this.addressRepository.create({
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

export { CreateAddressUseCase }