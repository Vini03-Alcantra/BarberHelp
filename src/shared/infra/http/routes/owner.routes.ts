import { Router } from "express";

import { CreateOwnerController } from "../../../../modules/owner/useCases/createOwner/CreateOwnerController";

const ownerRouter = Router()

const createOwnerController = new CreateOwnerController()


ownerRouter.post("/", createOwnerController.handle)

export { ownerRouter }