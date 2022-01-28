import { inject, injectable } from "tsyringe";
import { IOwnerRepository } from "../../repositories/IOwnerRepository";


@injectable()
class DeleteOwnerUseCase {
    constructor(
        @inject("OwnerRepository")
        private ownerRepository: IOwnerRepository
    ) { }

    async execute(email: string, password: string): Promise<void> {
        const ownerDeleted = await this.ownerRepository.delete(email, password)

        if (!ownerDeleted) {
            throw new Error("Email or Password incorrect/inexistent")
        }
    }
}

export { DeleteOwnerUseCase }