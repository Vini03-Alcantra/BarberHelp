import { inject, injectable } from "tsyringe";
import { ICreateClientDTO } from "../../dtos/ICreateClient";
import { IClientRepository } from "../../repositories/IClientRepository";

@injectable()
class CreateClientUseCase {
    constructor(
        @inject("ClientRepository")
        private clientRepository: IClientRepository
    ) { }

    async execute(
        id_address: string,
        {
            nome,
            email,
            cpf,
            birthday,
            phoneNumber,
            password
        }: ICreateClientDTO) {
        await this.clientRepository.create(
            id_address,
            {
                nome,
                email,
                cpf,
                birthday,
                phoneNumber,
                password
            }
        )
    }
}

export { CreateClientUseCase }