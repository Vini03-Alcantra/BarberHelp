import { Router } from "express";
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
clientRouter.get("/", readClientController.handle)
clientRouter.patch("/", updateClientController.handle)
clientRouter.delete("/", deleteClientController.handle)
export { clientRouter }