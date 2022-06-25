import { Request, Response } from "express"
import { container } from "tsyringe"
import { CreateServicesUseCase } from "./CreateServicesUseCase";

class CreateServicesController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { nome, type, duration, price, description, id_establishment } = req.body;

        const createServices = container.resolve(CreateServicesUseCase)

        try {
            await createServices.execute({
                nome,
                type,
                duration,
                price,
                description,
                id_establishment
            })

            return res.status(201).json({ "msg": "Service Created success" })
        } catch (error) {
            return res.status(500).json({ "msg": "Don't possibel created service" })
        }
    }
}

export { CreateServicesController }
