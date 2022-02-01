import { inject, injectable } from "tsyringe";
import { ICreateEmployeeDTO } from "../../dtos/ICreateEmployeeDTO";
import { IEmployeeRepository } from "../../repositories/IEmployeeRepository";

@injectable()
class DeleteEmployeeUseCase {
    constructor(
        @inject("EmployeeRepository")
        private employeeRepository: IEmployeeRepository
    ) { }

    async execute(id: string) {
        const employers = await this.employeeRepository.delete(id)

        return employers
    }
}

export { DeleteEmployeeUseCase }