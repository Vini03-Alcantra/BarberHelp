import { inject, injectable } from "tsyringe";
import { ICreateEmployeeDTO } from "../../dtos/ICreateEmployeeDTO";
import { IEmployeeRepository } from "../../repositories/IEmployeeRepository";

@injectable()
class ReadEmployeeUseCase {
    constructor(
        @inject("EmployeeRepository")
        private employeeRepository: IEmployeeRepository
    ) { }

    async execute() {
        const employers = await this.employeeRepository.read()

        return employers
    }
}

export { ReadEmployeeUseCase }