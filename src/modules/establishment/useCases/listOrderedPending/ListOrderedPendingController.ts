import { Request, Response } from "express"
import { container } from "tsyringe"

class ListOrderedPendingController {

    async handle(req: Request, res: Response) {
        const {establishment_id} = req.body;

        const establishment = container.resolve()
    }
}

export {ListOrderedPendingController}