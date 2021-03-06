import { Request, Response } from "express"
import { container } from "tsyringe"
import { ReadEmployeeUseCase } from "./ReadEmployeeUseCase";

class ReadEmployeeController {
    async handle(req: Request, res: Response) {

        const Employee = container.resolve(ReadEmployeeUseCase)

        try {
            const employes = await Employee.execute()

            return res.status(201).json({ employes })
        } catch (error) {
            return res.status(500).json({ "msg": "Don't possibel created Client" })
        }
    }
}

export { ReadEmployeeController }
