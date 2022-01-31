import { Router } from "express";
import { CreateClientController } from "../../../../modules/client/useCases/CreateClient/CreateClientController";
import { ReadClientController } from "../../../../modules/client/useCases/ReadClient/ReadClientController";

const clientRouter = Router()

const createClientController = new CreateClientController()
const readClientController = new ReadClientController()

clientRouter.post("/", createClientController.handle)
clientRouter.get("/", readClientController.handle)

export { clientRouter }