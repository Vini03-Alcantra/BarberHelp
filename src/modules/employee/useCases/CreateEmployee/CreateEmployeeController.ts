import { Request, Response } from "express"
import { container } from "tsyringe"
import { CreateEmployeeUseCase } from "./CreateEmployeeUseCase";

class CreateEmployeeController {
    async handle(req: Request, res: Response) {
        const {
            nome,
            email,
            phoneNumber,
            cpf,
            birthday,
            start_hour,
            end_hour,
            stop_hour_lunch,
            return_hour_lunch,
            id_establishment
        } = req.body;

        const Employee = container.resolve(CreateEmployeeUseCase)

        try {
            await Employee.execute(
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
                }
            )
            return res.status(201).json({ "msg": "Client Created success" })
        } catch (error) {
            return res.status(500).json({ "msg": "Don't possibel created Client" })
        }
    }
}

export { CreateEmployeeController }
