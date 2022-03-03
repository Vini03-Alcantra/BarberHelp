import { Request, Response } from "express"
import { container } from "tsyringe"

import { CreateOwnerUseCase } from "./CreateOwnerUseCase"

class CreateOwnerController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { nome, cpf, birthday, email, phoneNumber, password } = req.body;

        const createOwnerUseCase = container.resolve(CreateOwnerUseCase)

        try {
            await createOwnerUseCase.execute({
                nome,
                cpf,
                birthday,
                email,
                phoneNumber,
                password
            })

            return res.status(201).json({ "msg": "Owner Cadastrado com sucesso" })
        } catch (err) {
            console.error(err)

            return res.status(500).json({ "msg": err })
        }
    }
}

export { CreateOwnerController }
