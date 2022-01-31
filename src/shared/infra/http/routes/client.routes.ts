import { Router } from "express";
import { CreateClientController } from "../../../../modules/client/useCases/CreateClient/CreateClientController";
import { ReadClientController } from "../../../../modules/client/useCases/ReadClient/ReadClientController";
import { UpdateClientController } from "../../../../modules/client/useCases/UpdateClient/UpdateClientController";


const clientRouter = Router()

const createClientController = new CreateClientController()
const readClientController = new ReadClientController()
const updateClientController = new UpdateClientController()

clientRouter.post("/", createClientController.handle)
clientRouter.get("/", readClientController.handle)
clientRouter.patch("/", updateClientController.handle)

export { clientRouter }