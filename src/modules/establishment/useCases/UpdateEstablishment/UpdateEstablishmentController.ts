import { Request, Response } from "express"
import { container } from "tsyringe"
import { UpdateEstablishmentUseCase } from "./UpdateEstablishmentUseCase";


class UpdateEstablishmentController {
    async handle(req: Request, res: Response) {
        const { id, name, phone, email, StartHour, EndHour, StopHourLunch, ReturnHourLunch } = req.body;

        const Establishment = container.resolve(UpdateEstablishmentUseCase)

        try {
            await Establishment.execute(
                id,
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

export { UpdateEstablishmentController }
