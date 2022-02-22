import { Router } from "express";
import { ensureAuthenticated } from "../../../../midlewares/ensure-authenticated";
import { ensureOwner } from "../../../../midlewares/ensureOwner";

import { CreateOwnerController } from "../../../../modules/owner/useCases/createOwner/CreateOwnerController";
import { DeleteOwnerController } from "../../../../modules/owner/useCases/deleteOwner/DeleteOwnerController";
import { ReadOwnerController } from "../../../../modules/owner/useCases/readOwner/ReadOwnerController";
import { UpdateOwnerController } from "../../../../modules/owner/useCases/updateOwner/UpdateOwnerController";

const ownerRouter = Router()

const createOwnerController = new CreateOwnerController()
const deleteOwnerController = new DeleteOwnerController()
const updateOwnerController = new UpdateOwnerController()
const readOwnerController = new ReadOwnerController()

ownerRouter.post("/", createOwnerController.handle)
ownerRouter.delete("/", ensureAuthenticated, ensureOwner, deleteOwnerController.handle)
ownerRouter.patch("/", ensureAuthenticated, ensureOwner, updateOwnerController.handle)
ownerRouter.get("/", ensureAuthenticated, ensureOwner, readOwnerController.handle)

export { ownerRouter }