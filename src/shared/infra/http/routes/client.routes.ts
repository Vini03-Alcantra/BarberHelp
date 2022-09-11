import { Router } from "express";
import { ensureAuthenticated } from "../../../../midlewares/ensure-authenticated";
import { CreateClientController } from "../../../../modules/client/useCases/CreateClient/CreateClientController";
import { DeleteClientController } from "../../../../modules/client/useCases/DeleteClient/DeleteClientController";
import { ReadClientController } from "../../../../modules/client/useCases/ReadClient/ReadClientController";
import { UpdateClientController } from "../../../../modules/client/useCases/UpdateClient/UpdateClientController";


const clientRouter = Router()

const createClientController = new CreateClientController()
const readClientController = new ReadClientController()
const updateClientController = new UpdateClientController()
const deleteClientController = new DeleteClientController()


clientRouter.post("/", createClientController.handle)
clientRouter.get("/", ensureAuthenticated, readClientController.handle)
clientRouter.patch("/", ensureAuthenticated, updateClientController.handle)
clientRouter.delete("/", ensureAuthenticated, deleteClientController.handle)
export { clientRouter }