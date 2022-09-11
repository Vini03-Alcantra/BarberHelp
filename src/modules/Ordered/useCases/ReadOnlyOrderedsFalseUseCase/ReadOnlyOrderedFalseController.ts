import { Request, Response } from "express"
import { container } from "tsyringe"
import { ReadOnlyOrderedFalseUseCase } from "./ReadOnlyOrderedFalseUseCase"


class ReadOnlyOrderedFalseController {
    async handle(req: Request, res: Response): Promise<Response> {        
        const readOnlyOrderedFalseUseCase = container.resolve(ReadOnlyOrderedFalseUseCase)        
        try {
            const ordereds = await readOnlyOrderedFalseUseCase.execute()

            return res.status(200).json( ordereds )
        } catch (err) {
            console.error("ReadOrdered", err)

            return res.status(403).json({})
        }
    }
}

export { ReadOnlyOrderedFalseController }