import { Request, Response } from "express"
import { container } from "tsyringe"
import { UpdateConfirmeOrderedUseCase } from "./UpdateConfirmeOrderedUseCase"

class UpdateCofirmeOrderedController {
    async handle(req: Request, res: Response): Promise<Response> {
        const {idOrdered, confirm} = req.body

        const updateConfirmeOrderedUseCase = container.resolve(UpdateConfirmeOrderedUseCase)

        try {
            updateConfirmeOrderedUseCase.execute(idOrdered, confirm)

            return res.status(201).json("Updated with success")
        } catch (error) {
            return res.status(404).json(error)
        }
    }
}

export {UpdateCofirmeOrderedController}