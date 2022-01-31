import { Request, Response } from "express"
import { container } from "tsyringe"
import { DeleteClientUseCase } from "./DeleteClientUseCase"

class DeleteClientController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { email, password } = req.body;

        const deleteClientUseCase = container.resolve(DeleteClientUseCase)

        try {
            await deleteClientUseCase.execute(email, password)

            return res.status(200).json({ "msg": "Client deleted" })
        } catch (err) {
            return res.status(500).json({ "msg": "Não foi possível realizar a exclusão" })
        }
    }
}

export { DeleteClientController }