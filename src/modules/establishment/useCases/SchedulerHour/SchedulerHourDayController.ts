import { Request, Response } from "express"
import { container } from "tsyringe"
import { SchedulerHourDayUseCase } from "./SchedulerHourDayUseCase";

class SchedulerHourDayController {
    async handle(req: Request, res: Response) {
        const { id } = req.body;

        const Establishment = container.resolve(SchedulerHourDayUseCase)

        const result = await Establishment.execute(id)

        try {

            return res.status(201).json({ result })
        } catch (error) {
            return res.status(500).json({ "msg": "Didn't possible do this operation" })
        }
    }
}

export {SchedulerHourDayController}