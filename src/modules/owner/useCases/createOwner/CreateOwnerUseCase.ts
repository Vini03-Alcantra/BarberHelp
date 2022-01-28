import { hash } from "bcrypt";
import { inject, injectable } from "tsyringe";

import { ICreateOwnerDTO } from "../../dtos/ICreateOwnerDTO";
import { IOwnerRepository } from "../../repositories/IOwnerRepository";

@injectable()
class CreateOwnerUseCase {
    constructor(
        @inject("OwnerRepository")
        private ownerRepository: IOwnerRepository
    ) { }

    async execute({
        nome,
        cpf,
        birthday,
        email,
        phoneNumber,
        password
    }: ICreateOwnerDTO): Promise<void> {
        const cpfAlreadyExists = await this.ownerRepository.findByCPF(cpf);
        const emailAlreadyExists = await this.ownerRepository.findByEmail(email)

        if (cpfAlreadyExists) {
            throw new Error("Este cpf já existe")
        }

        if (emailAlreadyExists) {
            throw new Error("Este email já existe")
        }

        const passwordHash = await hash(password, 10)

        await this.ownerRepository.create({
            nome,
            cpf,
            birthday,
            email,
            phoneNumber,
            password: passwordHash
        })
    }

}

export { CreateOwnerUseCase }
