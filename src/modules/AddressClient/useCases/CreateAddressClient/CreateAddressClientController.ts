import { Request, Response } from "express"
import { container } from "tsyringe"
import { CreateAddressClientUseCase } from "./CreateAddressClientUseCase";

class CreateAddressClientController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { street, number_address, complement, neighborhood, city, state, cep, reference_point } = req.body;

        const createAddressClientUseCase = container.resolve(CreateAddressClientUseCase)

        try {
            await createAddressClientUseCase.execute({
                street,
                number_address,
                complement,
                neighborhood,
                city,
                state,
                cep,
                reference_point
            })

            return res.status(201).json({ "msg": "Address Created success" })
        } catch (error) {
            return res.status(500).json({ "msg": "Don't possibel created address" })
        }
    }
}

export { CreateAddressClientController }
