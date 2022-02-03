import { inject, injectable } from "tsyringe";
import { ICreateOrderedDTO } from "../../dtos/ICreateOrderedDTO";
import { IOrderedRepository } from "../../repositories/IOrderedRepository";

class DeleteOrderedUseCase {
    constructor(
        @inject("OrderedRepository")
        private orderedRepository: IOrderedRepository
    ) { }

    async execute(ordered_id: string) {
        const result = await this.orderedRepository.delete(ordered_id)

        return result
    }
}

export { DeleteOrderedUseCase }