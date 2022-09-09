import { Router } from "express";

import { ensureOwner } from "../../../../midlewares/ensureOwner";
import { CreateEstablishmentController } from "../../../../modules/establishment/useCases/CreateEstablishment/CreateEstablishmentController";
import { DeleteEstablishmentController } from "../../../../modules/establishment/useCases/DeleteEstablishment/DeleteEstablishmentController";
import { ReadEstablishmentController } from "../../../../modules/establishment/useCases/ReadEstablishment/ReadEstablishmentController";
import { UpdateEstablishmentController } from "../../../../modules/establishment/useCases/UpdateEstablishment/UpdateEstablishmentController";
import { ListEstablishmentByOwnerController } from "../../../../modules/establishment/useCases/ListEstablishmentByOwner/ListEstablishmentsByOwnerController"
import {SchedulerHourDayController} from "../../../../modules/establishment/useCases/SchedulerHour/SchedulerHourDayController"

const establishmentRouter = Router()

const createEstablishmentController = new CreateEstablishmentController()
const deleteEstablishmentController = new DeleteEstablishmentController()
const readEstablishmentController = new ReadEstablishmentController()
const updateEstablishmentController = new UpdateEstablishmentController()
const listEstablishmentByOwnerController = new ListEstablishmentByOwnerController()
const schedulerHourDayController = new SchedulerHourDayController()

establishmentRouter.post("/", ensureOwner, createEstablishmentController.handle)
establishmentRouter.delete("/", ensureOwner, deleteEstablishmentController.handle)
establishmentRouter.get("/", readEstablishmentController.handle)
establishmentRouter.patch("/", ensureOwner, updateEstablishmentController.handle)
establishmentRouter.get("/byOwner", ensureOwner, listEstablishmentByOwnerController.handle)
establishmentRouter.get("/hourToday", schedulerHourDayController.handle)

export { establishmentRouter }