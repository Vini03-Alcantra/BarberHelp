import { Router } from "express";

import { CreateOwnerController } from "../../../../modules/owner/useCases/createOwner/CreateOwnerController";
import { DeleteOwnerController } from "../../../../modules/owner/useCases/deleteOwner/DeleteOwnerController";


const ownerRouter = Router()

const createOwnerController = new CreateOwnerController()
const deleteOwnerController = new DeleteOwnerController()

ownerRouter.post("/", createOwnerController.handle)
ownerRouter.delete("/", deleteOwnerController.handle)

export { ownerRouter }