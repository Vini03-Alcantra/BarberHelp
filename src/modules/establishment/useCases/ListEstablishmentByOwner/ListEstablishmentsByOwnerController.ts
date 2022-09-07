import { container } from "tsyringe";
import {ListEstablishmentByOwnerUseCase} from "./ListEstablishmentByOwnerUseCase"
import {Request, Response } from "express";
class ListEstablishmentByOwnerController {
    async handle(req: Request, res: Response) {
        const user_id = req.user?.uuid
        const establishment = container.resolve(ListEstablishmentByOwnerUseCase)
        try {
            await establishment.execute(user_id!)
        } catch (error) {
            return res.status(500).json({ "msg": "Don't possible list Establishment of this owner" })
        }
    }
}

export {ListEstablishmentByOwnerController}