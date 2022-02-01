import { Request, Response } from "express"
import { container } from "tsyringe"
import { DeleteEstablishmentUseCase } from "./DeleteEstablishmentUseCase";

class DeleteClientController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { id } = req.body;

        const client = container.resolve(DeleteEstablishmentUseCase)

        try {
            await client.execute(id)

            return res.status(201).json({ "msg": "Client Deleted success" })
        } catch (error) {
            return res.status(500).json({ "msg": "Don't possibel created Deleted" })
        }
    }
}

export { DeleteClientController }
