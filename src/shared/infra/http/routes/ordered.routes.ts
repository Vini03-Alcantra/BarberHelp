import { Router } from "express";

import { CreateOrderedController } from "../../../../modules/Ordered/useCases/CreateOrderedUseCase/CreateOrderedController";
import { DeleteOrderedController } from "../../../../modules/Ordered/useCases/DeleteOrderedUseCase/DeleteOrderedController";
import { ReadOrderedController } from "../../../../modules/Ordered/useCases/ReadOrderedUseCase/ReadOrderedController";
import { UpdateOrderedController } from "../../../../modules/Ordered/useCases/UpdateOrderedUseCase/UpdateOrderedController";

const orderedRouter = Router()

const createOrderedController = new CreateOrderedController()
const deleteOrderedController = new DeleteOrderedController()
const readOrderedController = new ReadOrderedController()
const updateOrderedController = new UpdateOrderedController()

orderedRouter.post("/", createOrderedController.handle)
orderedRouter.delete("/", deleteOrderedController.handle)
orderedRouter.get("/", readOrderedController.handle)
orderedRouter.patch("/", updateOrderedController.handle)

export { orderedRouter }