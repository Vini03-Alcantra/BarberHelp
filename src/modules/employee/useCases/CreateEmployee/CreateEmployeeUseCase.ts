import { inject, injectable } from "tsyringe";
import { ICreateEmployeeDTO } from "../../dtos/ICreateEmployeeDTO";
import { IEmployeeRepository } from "../../repositories/IEmployeeRepository";

@injectable()
class CreateEmployeeUseCase {
    constructor(
        @inject("EmployeeRepository")
        private employeeRepository: IEmployeeRepository
    ) { }

    async execute(
        id_establishment: string,
        {
            nome,
            email,
            phoneNumber,
            cpf,
            birthday,
            start_hour,
            end_hour,
            stop_hour_lunch,
            return_hour_lunch
        }: ICreateEmployeeDTO) {
        await this.employeeRepository.create(
            id_establishment,
            {
                nome,
                email,
                phoneNumber,
                cpf,
                birthday,
                start_hour,
                end_hour,
                stop_hour_lunch,
                return_hour_lunch
            },
        )
    }
}

export { CreateEmployeeUseCase }