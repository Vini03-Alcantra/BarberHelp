import { Request, Response } from "express"
import { container } from "tsyringe"
import { DeleteOwnerUseCase } from "./DeleteOwnerUseCase"

class DeleteOwnerController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { email, password } = req.body;

        const ownerDeleteUseCase = container.resolve(DeleteOwnerUseCase)

        try {
            await ownerDeleteUseCase.execute(email, password)

            return res.status(200).json({ "msg": "Owner deleted" })
        } catch (err) {
            return res.status(500).json({ "msg": "Não foi possível realizar a exclusão" })
        }
    }
}

export { DeleteOwnerController }