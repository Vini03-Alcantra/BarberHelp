import { inject, injectable } from "tsyringe";
import { IOrderedRepository } from "../../repositories/IOrderedRepository";

@injectable()
class ReadAllOrderedUseCase {
    constructor(        
        @inject("OrderedRepository")
        private orderedRepository: IOrderedRepository
    ) { }

    async execute() {        
        const orderedes = await this.orderedRepository.readAllOrdereds()

        return orderedes
    }
}

export { ReadAllOrderedUseCase }