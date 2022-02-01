import { inject, injectable } from "tsyringe";
import { ICreateEmployeeDTO } from "../../dtos/ICreateEmployeeDTO";
import { IEmployeeRepository } from "../../repositories/IEmployeeRepository";

@injectable()
class UpdateEmployeeUseCase {
    constructor(
        @inject("EmployeeRepository")
        private employeeRepository: IEmployeeRepository
    ) { }

    async execute(
        id: string,
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
        await this.employeeRepository.update(
            id,
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

export { UpdateEmployeeUseCase }