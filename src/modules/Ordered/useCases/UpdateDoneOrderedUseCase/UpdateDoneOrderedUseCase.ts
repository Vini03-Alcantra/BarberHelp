import { inject, injectable } from "tsyringe";
import { IOrderedRepository } from "../../repositories/IOrderedRepository";

@injectable()
class UpdateDoneOrderedUseCase {
    constructor(
        @inject("OrderedRepository")
        private orderedRepository: IOrderedRepository
    ) { }

    async execute(idOrdered: string){
        await this.orderedRepository.updateDone(idOrdered)
    }

}

export {UpdateDoneOrderedUseCase}