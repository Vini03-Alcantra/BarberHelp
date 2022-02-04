import { Response, Request } from "express"
import { container } from "tsyringe"
import { DeleteAddressClientUseCase } from "./DeleteClientAddressUseCase"



class DeleteAddressClientController {
    async handle(req: Request, res: Response) {
        const { id } = req.body;

        const deleteAddressClientUseCase = container.resolve(DeleteAddressClientUseCase)

        try {
            const result = await deleteAddressClientUseCase.execute(id)
            if (!(result)) {
                return res.status(401).json({ "msg": "ID não encontrado" })
            }

            return res.status(201).json({ "msg": "Address deleted success" })
        } catch (error) {
            return res.status(500).json({ "msg": "Don't possibel deleted address" })
        }

    }

}

export { DeleteAddressClientController }