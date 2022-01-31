import { Request, Response } from "express"
import { container } from "tsyringe"
import { CreateClientUseCase } from "./CreateClientUseCase";

class CreateClientController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { id_address, nome, email, cpf, birthday, phoneNumber, password } = req.body;

        const client = container.resolve(CreateClientUseCase)

        try {
            await client.execute(
                id_address,
                {
                    nome,
                    email,
                    cpf,
                    birthday,
                    phoneNumber,
                    password
                }
            )

            return res.status(201).json({ "msg": "Client Created success" })
        } catch (error) {
            return res.status(500).json({ "msg": "Don't possibel created Client" })
        }
    }
}

export { CreateClientController }
