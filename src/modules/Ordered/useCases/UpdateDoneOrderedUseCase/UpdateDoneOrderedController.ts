import { Request, Response } from "express"
import { container } from "tsyringe"
import { UpdateDoneOrderedUseCase } from "./UpdateDoneOrderedUseCase"

class UpdateDoneOrderedController {
    async handle(req: Request, res: Response): Promise<Response> {
        const {idOrdered} = req.body

        const updateDoneOrderedUseCase = container.resolve(UpdateDoneOrderedUseCase)

        try {
            updateDoneOrderedUseCase.execute(idOrdered)

            return res.status(201).json("Updated with success")
        } catch (error) {
            return res.status(404).json(error)
        }
    }
}

export {UpdateDoneOrderedController}