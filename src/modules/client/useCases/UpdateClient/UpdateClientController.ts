import { Request, Response } from "express"
import { container } from "tsyringe"

import { UpdateClientUseCase } from "./UpdateClientuseCase";

class UpdateClientController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { id, nome, cpf, birthday, email, phoneNumber } = req.body;

        const updateClientUseCase = container.resolve(UpdateClientUseCase)

        try {
            await updateClientUseCase.execute(
                id,
                {
                    nome,
                    cpf,
                    birthday,
                    email,
                    phoneNumber
                }
            )
        } catch (err) {
            console.error(err)

            res.status(500).json({ "msg": "Não foi possível realizar a atualização" })
        }

        return res.status(201).json({ "msg": "Alterado com sucesso" })

    }
}

export { UpdateClientController }