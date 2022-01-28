import { Request, Response } from "express"
import { container } from "tsyringe"

import { ReadOwnerUseCase } from "./ReadOwnerUseCase";

class ReadOwnerController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { id } = req.body;

        const readOwnerUseCase = container.resolve(ReadOwnerUseCase)

        try {
            const owner = await readOwnerUseCase.execute(id)

            return res.status(200).json(owner)
        } catch (error) {
            return res.status(400).json()
        }
    }
}

export { ReadOwnerController }