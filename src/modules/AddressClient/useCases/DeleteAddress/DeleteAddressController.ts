import { Response, Request } from "express"
import { container } from "tsyringe"
import { DeleteAddressUseCase } from "./DeleteAddressUseCase"



class DeleteAddressController {
    async handle(req: Request, res: Response) {
        const { id } = req.body;

        const deleteAddressUseCase = container.resolve(DeleteAddressUseCase)

        try {
            const result = await deleteAddressUseCase.execute(id)
            if (!result) {
                return res.status(401).json({ "msg": "ID não encontrado" })
            }

            return res.status(201).json({ "msg": "Address deleted success" })
        } catch (error) {
            return res.status(500).json({ "msg": "Don't possibel deleted address" })
        }

    }

}

export { DeleteAddressController }