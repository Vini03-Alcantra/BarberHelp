import { Request, Response } from "express"
import { container } from "tsyringe"
import { UpdateEmployeeUseCase } from "./UpdateEmployeeUseCase";

class UpdateEmployeeController {
    async handle(req: Request, res: Response) {
        const {
            id,
            nome,
            email,
            phoneNumber,
            cpf,
            birthday,
            start_hour,
            end_hour,
            stop_hour_lunch,
            return_hour_lunch,
        } = req.body;

        const Employee = container.resolve(UpdateEmployeeUseCase)

        try {
            await Employee.execute(
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
                }
            )
            return res.status(201).json({ "msg": "Employee Created success" })
        } catch (error) {
            return res.status(500).json({ "msg": "Don't possibel updated employee" })
        }
    }
}

export { UpdateEmployeeController }
