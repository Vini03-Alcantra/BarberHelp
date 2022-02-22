import { Request, Response } from "express"
import { container } from "tsyringe"
import { ReadOrderedUseCase } from "./ReadOrderedUseCase"


class ReadOrderedController {
    async handle(req: Request, res: Response): Promise<Response> {
        const readOrderedUseCase = container.resolve(ReadOrderedUseCase)

        try {
            const ordereds = readOrderedUseCase.execute()

            return res.status(200).json({ ordereds })
        } catch (err) {
            console.error("ReadOrdered", err)

            return res.status(403).json({})
        }
    }
}

export { ReadOrderedController }