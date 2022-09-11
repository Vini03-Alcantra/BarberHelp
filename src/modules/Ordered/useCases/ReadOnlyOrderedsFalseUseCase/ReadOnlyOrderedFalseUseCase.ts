import { inject, injectable } from "tsyringe";
import { IOrderedRepository } from "../../repositories/IOrderedRepository";

@injectable()
class ReadOnlyOrderedFalseUseCase {
    constructor(        
        @inject("OrderedRepository")
        private orderedRepository: IOrderedRepository
    ) { }

    async execute() {        
        const orderedes = await this.orderedRepository.readOnlyOrderedsFalse()

        return orderedes
    }
}

export { ReadOnlyOrderedFalseUseCase }