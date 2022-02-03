import { inject, injectable } from "tsyringe";
import { ICreateEstablishmentDTO } from "../../dtos/ICreateEstablishmentDTO";
import { IEstablishmentRepository } from "../../repositories/IEstablishmentRepository";

@injectable()
class CreateEstablishmentUseCase {
    constructor(
        @inject("EstablishmentRepository")
        private establishmentRepository: IEstablishmentRepository
    ) { }

    async execute(
        fk_id_address: string,
        fk_id_owner: string,
        {
            name,
            phone,
            email,
            StartHour,
            EndHour,
            StopHourLunch,
            ReturnHourLunch
        }: ICreateEstablishmentDTO) {
        await this.establishmentRepository.create(
            fk_id_owner,
            fk_id_address,
            {
                name,
                phone,
                email,
                StartHour,
                EndHour,
                StopHourLunch,
                ReturnHourLunch
            },
        )
    }
}

export { CreateEstablishmentUseCase }