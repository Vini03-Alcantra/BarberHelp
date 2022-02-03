import { Request, Response } from "express"
import { container } from "tsyringe"
import { CreateOrderedUseCase } from "./CreateOrderedUseCase"

class CreateOrderedController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { appointment, fk_client_id, fk_establishment_id, fk_employee_id, service_id } = req.body;

        const createOrderedUseCase = container.resolve(CreateOrderedUseCase)

        try {
            const result = createOrderedUseCase.execute(
                service_id,
                {
                    fk_client_id,
                    fk_establishment_id,
                    fk_employee_id,
                    appointment
                }
            )

            return res.status(201).json(result)
        } catch (error) {
            return res.status(401).json({ "msg": "Operação não foi possível" })
        }
    }
}

export { CreateOrderedController }