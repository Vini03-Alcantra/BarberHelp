import { Request, Response } from "express"
import { container } from "tsyringe"
import { DeleteEmployeeUseCase } from "./DeleteEmployeeUseCase";

class DeleteEmployeeController {
    async handle(req: Request, res: Response) {
        const { id } = req.body;

        const Employee = container.resolve(DeleteEmployeeUseCase)

        try {
            await Employee.execute(id)

            return res.status(201).json({ "msg": "Client Deleted success" })
        } catch (error) {
            return res.status(500).json({ "msg": "Don't possibel deleted Client" })
        }
    }
}

export { DeleteEmployeeController }
