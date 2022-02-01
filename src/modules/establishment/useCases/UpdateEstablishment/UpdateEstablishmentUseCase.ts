import { inject, injectable } from "tsyringe";
import { ICreateEstablishmentDTO } from "../../dtos/ICreateEstablishmentDTO";
import { IEstablishmentRepository } from "../../repositories/IEstablishmentRepository";

@injectable()
class UpdateEstablishmentUseCase {
    constructor(
        @inject("EstablishmentRepository")
        private establishmentRepository: IEstablishmentRepository
    ) { }

    async execute(
        id: string,
        {
            name,
            phone,
            email,
            StartHour,
            EndHour,
            StopHourLunch,
            ReturnHourLunch
        }: ICreateEstablishmentDTO) {
        await this.establishmentRepository.update(
            id,
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

export { UpdateEstablishmentUseCase }