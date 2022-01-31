import { Router } from "express";
import { CreateClientController } from "../../../../modules/client/useCases/CreateClient/CreateClientController";

const clientRouter = Router()

const createClientController = new CreateClientController()

clientRouter.post("/", createClientController.handle)

export { clientRouter }