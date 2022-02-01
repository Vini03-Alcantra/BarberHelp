import { Request, Response } from "express"
import { container } from "tsyringe"
import { ReadAddressUseCase } from "./ReadClientAddressUseCase"




class ReadAddressController {
    async handle(req: Request, res: Response) {
        const { id } = req.body;

        const readAddressUseCase = container.resolve(ReadAddressUseCase)

        try {
            const address = await readAddressUseCase.execute(
                id
            )

            return res.status(200).json(address)
        } catch (error) {
            return res.status(200).json({ msg: "Não foi possível realizar a operação" })
        }
    }
}

export { ReadAddressController }