import { inject, injectable } from "tsyringe";
import { ICreateOwnerDTO } from "../../dtos/ICreateOwnerDTO";
import { IOwnerRepository } from "../../repositories/IOwnerRepository";

@injectable()
class LoginOwnerUseCase {
    constructor(
        @inject("OwnerRepository")
        private ownerRepository: IOwnerRepository
    ) { }

    async execute(email: String, password: String){
        const owner = await this.ownerRepository.findByEmailAndPassword(email, password);

        return owner
    }

}

export {LoginOwnerUseCase}