import { Request, Response } from "express"
import { container } from "tsyringe"
import { UpdateOwnerUseCase } from "./UpdateOwnerUseCase";


class UpdateOwnerController {
    async handle(req: Request, res: Response): Promise<Response> {
        //const { id } = req.params;
        const { id, nome, cpf, birthday, email, phoneNumber } = req.body;

        const updateOwnerUseCase = container.resolve(UpdateOwnerUseCase)

        try {
            console.log(id)
            await updateOwnerUseCase.execute(
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
            console.error(err.message)

            res.status(500).json({ "msg": "Não foi possível realizar a atualização" })
        }

        return res.status(201).json({ "msg": "Alterado com sucesso" })

    }
}

export { UpdateOwnerController }