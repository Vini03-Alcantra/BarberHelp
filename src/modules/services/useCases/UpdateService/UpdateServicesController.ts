import { Request, Response } from "express"
import { container } from "tsyringe"

import { UpdateServiceUseCase } from "./UpdateServicesUseCase"

class UpdateServiceController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { id, nome, type, duration, price, description, id_establishment } = req.body;

        const updateService = container.resolve(UpdateServiceUseCase)

        try {
            await updateService.execute(
                id,
                {
                    nome,
                    type,
                    duration,
                    price,
                    description,
                    id_establishment
                })

            return res.status(201).json({ "msg": "Service Updated success" })
        } catch (error) {
            return res.status(500).json({ "msg": "Don't possibel updated service" })
        }
    }
}

export { UpdateServiceController }