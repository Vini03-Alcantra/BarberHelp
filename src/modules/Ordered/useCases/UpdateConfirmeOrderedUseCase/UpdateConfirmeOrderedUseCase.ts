import { inject, injectable } from "tsyringe";
import { IOrderedRepository } from "../../repositories/IOrderedRepository";

@injectable()
class UpdateConfirmeOrderedUseCase {
    constructor(
        @inject("OrderedRepository")
        private orderedRepository: IOrderedRepository
    ) { }

    async execute(
        idOrdered: string,
        confirm: boolean
    ) {
        await this.orderedRepository.updateConfirmed(idOrdered, confirm)
    }
}

export {UpdateConfirmeOrderedUseCase}