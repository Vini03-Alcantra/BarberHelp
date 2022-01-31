import { inject, injectable } from "tsyringe";
import { IClientRepository } from "../../repositories/IClientRepository";


@injectable()
class ReadClientUseCase {
    constructor(
        @inject("ClientRepository")
        private clientRepository: IClientRepository
    ) { }

    async execute(cpf: string) {
        const client = await this.clientRepository.findByCPF(cpf)

        return client
    }
}

export { ReadClientUseCase }
