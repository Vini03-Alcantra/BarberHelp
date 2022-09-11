import { Request, Response } from "express"
import { container } from "tsyringe"
import { ReadAllOrderedUseCase } from "./ReadAllOrderedUseCase"


class ReadAllOrderedController {
    async handle(req: Request, res: Response): Promise<Response> {        
        const readAllOrderedUseCase = container.resolve(ReadAllOrderedUseCase)        
        try {
            const ordereds = await readAllOrderedUseCase.execute()

            return res.status(200).json( ordereds )
        } catch (err) {
            console.error("ReadOrdered", err)

            return res.status(403).json({})
        }
    }
}

export { ReadAllOrderedController }