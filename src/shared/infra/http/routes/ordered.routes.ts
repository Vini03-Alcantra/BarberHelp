import { Router } from "express";

import { ensureOwner } from "../../../../midlewares/ensureOwner";
import { CreateOrderedController } from "../../../../modules/Ordered/useCases/CreateOrderedUseCase/CreateOrderedController";
import { DeleteOrderedController } from "../../../../modules/Ordered/useCases/DeleteOrderedUseCase/DeleteOrderedController";
import { ReadOrderedController } from "../../../../modules/Ordered/useCases/ReadOrderedUseCase/ReadOrderedController";
import { UpdateOrderedController } from "../../../../modules/Ordered/useCases/UpdateOrderedUseCase/UpdateOrderedController";
import { UpdateCofirmeOrderedController } from "../../../../modules/Ordered/useCases/UpdateConfirmeOrderedUseCase/UpdateConfirmeOrderedController";
import { ReadAllOrderedController } from "../../../../modules/Ordered/useCases/ReadAllOrderedsUseCase/ReadAllOrderedController";
import { ReadOnlyOrderedFalseController } from "../../../../modules/Ordered/useCases/ReadOnlyOrderedsFalseUseCase/ReadOnlyOrderedFalseController";


const orderedRouter = Router()

const createOrderedController = new CreateOrderedController()
const deleteOrderedController = new DeleteOrderedController()
const readOrderedController = new ReadOrderedController()
const updateOrderedController = new UpdateOrderedController()
const updateCofirmeOrderedController = new UpdateCofirmeOrderedController()
const readAllOrderedController = new ReadAllOrderedController()
const readOnlyOrderedFalseController = new ReadOnlyOrderedFalseController()

orderedRouter.post("/", createOrderedController.handle)
orderedRouter.delete("/", deleteOrderedController.handle)
orderedRouter.get("/", readOrderedController.handle)
orderedRouter.get("/", ensureOwner, readAllOrderedController.handle)
orderedRouter.get("/", ensureOwner, readOnlyOrderedFalseController.handle)
orderedRouter.patch("/", updateOrderedController.handle)
orderedRouter.patch("/confirm", updateCofirmeOrderedController.handle)

export { orderedRouter }