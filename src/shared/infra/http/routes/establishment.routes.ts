import { Router } from "express";
import { ensureOwner } from "../../../../midlewares/ensureOwner";
import { CreateEstablishmentController } from "../../../../modules/establishment/useCases/CreateEstablishment/CreateEstablishmentController";
import { DeleteEstablishmentController } from "../../../../modules/establishment/useCases/DeleteEstablishment/DeleteEstablishmentController";
import { ReadEstablishmentController } from "../../../../modules/establishment/useCases/ReadEstablishment/ReadEstablishmentController";
import { UpdateEstablishmentController } from "../../../../modules/establishment/useCases/UpdateEstablishment/UpdateEstablishmentController";

const establishmentRouter = Router()

const createEstablishmentController = new CreateEstablishmentController()
const deleteEstablishmentController = new DeleteEstablishmentController()
const readEstablishmentController = new ReadEstablishmentController()
const updateEstablishmentController = new UpdateEstablishmentController()


establishmentRouter.post("/", ensureOwner, createEstablishmentController.handle)
establishmentRouter.delete("/", ensureOwner, deleteEstablishmentController.handle)
establishmentRouter.get("/", readEstablishmentController.handle)
establishmentRouter.patch("/", ensureOwner, updateEstablishmentController.handle)

export { establishmentRouter }