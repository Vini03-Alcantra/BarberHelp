import { Router } from "express";

import { CreateOwnerController } from "../../../../modules/owner/useCases/createOwner/CreateOwnerController";
import { DeleteOwnerController } from "../../../../modules/owner/useCases/deleteOwner/DeleteOwnerController";
import { UpdateOwnerController } from "../../../../modules/owner/useCases/updateOwner/UpdateOwnerController";

const ownerRouter = Router()

const createOwnerController = new CreateOwnerController()
const deleteOwnerController = new DeleteOwnerController()
const updateOwnerController = new UpdateOwnerController()

ownerRouter.post("/", createOwnerController.handle)
ownerRouter.delete("/", deleteOwnerController.handle)
ownerRouter.patch("/", updateOwnerController.handle)
export { ownerRouter }