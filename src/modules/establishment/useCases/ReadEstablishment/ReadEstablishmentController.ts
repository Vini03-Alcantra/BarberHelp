import { Request, Response } from "express"
import { container } from "tsyringe"
import { ReadEstablishmentUseCase } from "./ReadEstablishmentUseCase";


class ReadEstablishmentController {
    async handle(req: Request, res: Response) {
        const { id } = req.body;

        const Establishment = container.resolve(ReadEstablishmentUseCase)

        const result = await Establishment.execute(id)

        try {

            return res.status(201).json({ result })
        } catch (error) {
            return res.status(500).json({ "msg": "Don't possibel created Client" })
        }
    }
}

export { ReadEstablishmentController }
