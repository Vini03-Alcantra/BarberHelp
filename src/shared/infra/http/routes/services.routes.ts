import { Router } from "express";
import { CreateServicesController } from "../../../../modules/services/useCases/CreateService/CreateServicesController";
import { DeleteServicesController } from "../../../../modules/services/useCases/DeleteService/DeleteServicesController";
import { ReadServiceController } from "../../../../modules/services/useCases/ReadService/ReadServiceController";
import { UpdateServiceController } from "../../../../modules/services/useCases/UpdateService/UpdateServicesController";


const servicesRouter = Router()

const createServicesController = new CreateServicesController()
const deleteServicesController = new DeleteServicesController()
const readServiceController = new ReadServiceController()
const updateServiceController = new UpdateServiceController()

servicesRouter.post("/", createServicesController.handle)
servicesRouter.delete("/", deleteServicesController.handle)
servicesRouter.get("/", readServiceController.handle)
servicesRouter.patch("/", updateServiceController.handle)

export { servicesRouter }