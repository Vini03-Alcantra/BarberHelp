import { Response, Request } from "express"
import { container } from "tsyringe"
import { DeleteServicesUseCase } from "./DeleteServicesUseCase"



class DeleteServicesController {
    async handle(req: Request, res: Response) {
        const { id } = req.body;

        const deleteServiceUseCase = container.resolve(DeleteServicesUseCase)

        try {
            const result = await deleteServiceUseCase.execute(id)
            if (!result) {
                return res.status(401).json({ "msg": "ID não encontrado" })
            }

            return res.status(201).json({ "msg": "Service deleted success" })
        } catch (error) {
            return res.status(500).json({ "msg": "Don't possibel deleted service" })
        }

    }

}

export { DeleteServicesController }