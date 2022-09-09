import { inject, injectable } from "tsyringe";
import { IEstablishmentRepository } from "../../repositories/IEstablishmentRepository";

@injectable()
class SchedulerHourDayUseCase {
    constructor(
        @inject("EstablishmentRepository")
        private establishmentRepository: IEstablishmentRepository
    ) { }

    async execute(idEstablishment: string){
        const schedulerToday = await this.establishmentRepository.findById(idEstablishment)
        return schedulerToday
    }
}

export {SchedulerHourDayUseCase}