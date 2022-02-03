import { Router } from "express";
import { CreateEstablishmentController } from "../../../../modules/establishment/useCases/CreateEstablishment/CreateEstablishmentController";
import { DeleteEstablishmentController } from "../../../../modules/establishment/useCases/DeleteEstablishment/DeleteEstablishmentController";
import { ReadEstablishmentController } from "../../../../modules/establishment/useCases/ReadEstablishment/ReadEstablishmentController";
import { UpdateEstablishmentController } from "../../../../modules/establishment/useCases/UpdateEstablishment/UpdateEstablishmentController";

const establishmentRouter = Router()

const createEstablishmentController = new CreateEstablishmentController()
const deleteEstablishmentController = new DeleteEstablishmentController()
const readEstablishmentController = new ReadEstablishmentController()
const updateEstablishmentController = new UpdateEstablishmentController()


establishmentRouter.post("/", createEstablishmentController.handle)
establishmentRouter.delete("/", deleteEstablishmentController.handle)
establishmentRouter.get("/", readEstablishmentController.handle)
establishmentRouter.patch("/", updateEstablishmentController.handle)

export { establishmentRouter }