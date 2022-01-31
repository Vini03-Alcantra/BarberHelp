import { inject, injectable } from "tsyringe";
import { ICreateClientDTO } from "../../dtos/ICreateClient";
import { IClientRepository } from "../../repositories/IClientRepository";

@injectable()
class UpdateClientUseCase {
    constructor(
        @inject("ClientRepository")
        private clientRepository: IClientRepository
    ) { }

    async execute(
        id: string,
        {
            nome,
            cpf,
            birthday,
            email,
            phoneNumber
        }: Omit<ICreateClientDTO, "password">
    ): Promise<void> {
        await this.clientRepository.update(
            id,
            {
                nome,
                cpf,
                birthday,
                email,
                phoneNumber,
            }
        )

    }
}

export { UpdateClientUseCase }