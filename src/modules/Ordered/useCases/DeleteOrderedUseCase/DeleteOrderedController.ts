import { Request, Response } from "express"
import { container } from "tsyringe"
import { DeleteOrderedUseCase } from "./DeleteOrderedUseCase"

class DeleteOrderedController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { ordered_id } = req.body;

        const deleteOrderedUseCase = container.resolve(DeleteOrderedUseCase)

        try {
            const result = await deleteOrderedUseCase.execute(ordered_id)

            if (!(result)) {
                return res.status(403).json({ "msg": "ID não encotnrado" })
            }

            return res.status(201).json({ "msg": "Deletadop com sucesso" })

        } catch (error) {
            return res.status(500).json({ "msg": "Operação não realizada com sucesso" })
        }
    }
}

export { DeleteOrderedController }