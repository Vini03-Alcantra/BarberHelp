import { Request, Response } from "express"
import { container } from "tsyringe"
import { ReadAddressClientUseCase } from "./ReadClientAddressUseCase"

class ReadAddressClientController {
    async handle(req: Request, res: Response) {
        const { id } = req.body;

        const readAddressClientUseCase = container.resolve(ReadAddressClientUseCase)

        try {
            const addressClient = await readAddressClientUseCase.execute(
                id
            )

            return res.status(200).json(addressClient)
        } catch (error) {
            return res.status(200).json({ msg: "Não foi possível realizar a operação" })
        }
    }
}

export { ReadAddressClientController }