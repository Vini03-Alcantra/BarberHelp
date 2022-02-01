import { Request, Response } from "express"
import { container } from "tsyringe"
import { ReadServiceUseCase } from "./ReadServiceUseCase"

class ReadServiceController {
    async handle(req: Request, res: Response) {
        const { id } = req.body;

        const readServiceUseCase = container.resolve(ReadServiceUseCase)

        try {
            const services = await readServiceUseCase.execute()

            return res.status(200).json(services)
        } catch (error) {
            return res.status(500).json({ msg: "Não foi possível realizar a operação" })
        }
    }
}

export { ReadServiceController }