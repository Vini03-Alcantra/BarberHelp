import { Request, Response } from "express"
import { container } from "tsyringe"

import { UpdateAddressUseCase } from "./UpdateClientAddressUseCase"

class UpdateAddressController {
    async handle(req: Request, res: Response) {
        const { id, street, number_address, complement, neighborhood, city, state, cep, reference_point } = req.body;

        const updateAddressController = container.resolve(UpdateAddressUseCase)

        try {
            await updateAddressController.execute(
                id,
                {
                    street,
                    number_address,
                    complement,
                    neighborhood,
                    city,
                    state,
                    cep,
                    reference_point
                }
            )

            return res.status(201).json({ "msg": "Address Updated success" })
        } catch (error) {
            return res.status(500).json({ "msg": "Don't possibel Updated address" })
        }
    }
}

export { UpdateAddressController }