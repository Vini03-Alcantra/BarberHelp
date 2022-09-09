import { inject, injectable } from "tsyringe";
import { ICreateOrderedDTO } from "../../dtos/ICreateOrderedDTO";
import { IOrderedRepository } from "../../repositories/IOrderedRepository";

@injectable()
class CreateOrderedUseCase {
    constructor(
        @inject("OrderedRepository")
        private orderedRepository: IOrderedRepository
    ) { }

    async execute(
        {
            service_id,
            appointment,
            fk_client_id,
            fk_establishment_id,
            fk_employee_id,
        }: ICreateOrderedDTO) {
        await this.orderedRepository.create({
                service_id,
                appointment,
                fk_client_id,
                fk_establishment_id,
                fk_employee_id,
        })
    }
}

export { CreateOrderedUseCase }