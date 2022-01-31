import { Request, Response } from "express"
import { container } from "tsyringe"
import { ReadClientUseCase } from "./ReadClientUseCase";



class ReadClientController {
    async handle(req: Request, res: Response) {
        const { id } = req.body;

        const readClient = container.resolve(ReadClientUseCase)

        try {
            const client = await readClient.execute(id)

            if (!(client)) {
                return res.status(401).json({ "msg": "Cpf don't exists" })
            }

            return res.status(201).json({ client })
        } catch (err) {
            console.error("err", err)

            return res.status(201).json({ "msg": "operation don't possible" })
        }
    }
}

export { ReadClientController }