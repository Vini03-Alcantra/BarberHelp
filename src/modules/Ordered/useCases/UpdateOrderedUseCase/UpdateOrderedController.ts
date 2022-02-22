import { Request, Response } from "express"
import { container } from "tsyringe"
import { UpdateOrderedUseCase } from "./UpdateOrderedUseCase"


class UpdateOrderedController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { ordered_id, appointment, fk_client_id, fk_establishment_id, fk_employee_id, service_id } = req.body;

        const updateOrderedUseCase = container.resolve(UpdateOrderedUseCase)

        try {
            const result = updateOrderedUseCase.execute(
                ordered_id,
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
            console.error(error)

            return res.status(403).json({ "msg": "Não foi possível realizar the update" })
        }
    }
}

export { UpdateOrderedController }