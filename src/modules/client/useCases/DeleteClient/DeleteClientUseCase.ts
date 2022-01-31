import { inject, injectable } from "tsyringe";
import { IClientRepository } from "../../repositories/IClientRepository";


@injectable()
class DeleteClientUseCase {
    constructor(
        @inject("ClientRepository")
        private clientRepository: IClientRepository
    ) { }

    async execute(email: string, password: string): Promise<void> {
        const clientDeleted = await this.clientRepository.delete(email, password)

        if (!clientDeleted) {
            throw new Error("Email or Password incorrect/inexistent")
        }
    }
}

export { DeleteClientUseCase }