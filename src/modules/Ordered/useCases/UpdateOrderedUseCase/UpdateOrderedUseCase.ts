import { inject, injectable } from "tsyringe";
import { ICreateOrderedDTO } from "../../dtos/ICreateOrderedDTO";
import { IOrderedRepository } from "../../repositories/IOrderedRepository";

@injectable()
class UpdateOrderedUseCase {
    constructor(
        @inject("OrderedRepository")
        private orderedRepository: IOrderedRepository
    ) { }

    async execute(
        ordered_id: string,
        service_id: string,
        {
            appointment,
            fk_client_id,
            fk_establishment_id,
            fk_employee_id,
        }: ICreateOrderedDTO) {
        await this.orderedRepository.update(
            ordered_id,
            service_id,
            {
                appointment,
                fk_client_id,
                fk_establishment_id,
                fk_employee_id,
            })
    }
}

export { UpdateOrderedUseCase }