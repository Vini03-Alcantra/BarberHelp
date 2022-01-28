import { inject, injectable } from "tsyringe";
import { ICreateOwnerDTO } from "../../dtos/ICreateOwnerDTO";
import { IOwnerRepository } from "../../repositories/IOwnerRepository";

@injectable()
class UpdateOwnerUseCase {
    constructor(
        @inject("OwnerRepository")
        private ownerRepository: IOwnerRepository
    ) { }

    async execute(
        id: string,
        {
            nome,
            cpf,
            birthday,
            email,
            phoneNumber
        }: Omit<ICreateOwnerDTO, "password">
    ): Promise<void> {
        await this.ownerRepository.update(
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

export { UpdateOwnerUseCase }