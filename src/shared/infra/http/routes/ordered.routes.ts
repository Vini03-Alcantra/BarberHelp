import { Router } from "express";

import { CreateOrderedController } from "../../../../modules/Ordered/useCases/CreateOrderedUseCase/CreateOrderedController";
import { DeleteOrderedController } from "../../../../modules/Ordered/useCases/DeleteOrderedUseCase/DeleteOrderedController";
import { ReadOrderedController } from "../../../../modules/Ordered/useCases/ReadOrderedUseCase/ReadOrderedController";
import { UpdateOrderedController } from "../../../../modules/Ordered/useCases/UpdateOrderedUseCase/UpdateOrderedController";
import { UpdateCofirmeOrderedController } from "../../../../modules/Ordered/useCases/UpdateConfirmeOrderedUseCase/UpdateConfirmeOrderedController";
import { ReadAllOrderedController } from "../../../../modules/Ordered/useCases/ReadAllOrderedsUseCase/ReadAllOrderedController";


const orderedRouter = Router()

const createOrderedController = new CreateOrderedController()
const deleteOrderedController = new DeleteOrderedController()
const readOrderedController = new ReadOrderedController()
const updateOrderedController = new UpdateOrderedController()
const updateCofirmeOrderedController = new UpdateCofirmeOrderedController()
const readAllOrderedController = new ReadAllOrderedController()

orderedRouter.post("/", createOrderedController.handle)
orderedRouter.delete("/", deleteOrderedController.handle)
orderedRouter.get("/", readOrderedController.handle)
orderedRouter.get("/", readAllOrderedController.handle)
orderedRouter.patch("/", updateOrderedController.handle)
orderedRouter.patch("/confirm", updateCofirmeOrderedController.handle)

export { orderedRouter }