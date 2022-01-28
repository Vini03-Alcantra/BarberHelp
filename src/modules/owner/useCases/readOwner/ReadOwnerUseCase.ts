import { inject, injectable } from "tsyringe"
import { IOwnerRepository } from "../../repositories/IOwnerRepository"

@injectable()
class ReadOwnerUseCase {
    constructor(
        @inject("OwnerRepository")
        private ownerRepository: IOwnerRepository
    ) { }

    async execute(id: string) {
        const Owner = await this.ownerRepository.findById(id);

        return Owner
    }

}

export { ReadOwnerUseCase }