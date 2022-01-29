import { Request, Response } from "express"
import { container } from "tsyringe"
import { CreateAddressUseCase } from "./CreateAddressUseCase";

class CreateAddressController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { street, number_address, complement, neighborhood, city, state, cep, reference_point } = req.body;

        const createAddress = container.resolve(CreateAddressUseCase)

        try {
            await createAddress.execute({
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

export { CreateAddressController }
