import { Request, Response } from "express"
import { container } from "tsyringe"
import { CreateEstablishmentUseCase } from "./CreateEstablishmentuseCase";


class CreateEstablishmentController {
    async handle(req: Request, res: Response) {
        const { name, phone, email, StartHour, EndHour, StopHourLunch, ReturnHourLunch, fk_id_address, fk_id_owner } = req.body;

        const Establishment = container.resolve(CreateEstablishmentUseCase)

        try {
            await Establishment.execute(
                fk_id_address,
                fk_id_owner,
                {
                    name,
                    phone,
                    email,
                    StartHour,
                    EndHour,
                    StopHourLunch,
                    ReturnHourLunch
                }
            )
            return res.status(201).json({ "msg": "Client Created success" })
        } catch (error) {
            return res.status(500).json({ "msg": "Don't possibel created Client" })
        }
    }
}

export { CreateEstablishmentController }
