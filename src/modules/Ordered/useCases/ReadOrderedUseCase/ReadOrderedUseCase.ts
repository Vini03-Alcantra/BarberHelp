import { inject, injectable } from "tsyringe";
import { ICreateOrderedDTO } from "../../dtos/ICreateOrderedDTO";
import { IOrderedRepository } from "../../repositories/IOrderedRepository";

@injectable()
class ReadOrderedUseCase {
    constructor(        
        @inject("OrderedRepository")
        private orderedRepository: IOrderedRepository
    ) { }

    async execute() {        
        const orderedes = await this.orderedRepository.read()

        return orderedes
    }
}

export { ReadOrderedUseCase }