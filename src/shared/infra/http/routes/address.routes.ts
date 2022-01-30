import { Router } from "express";
import { CreateAddressController } from "../../../../modules/address/useCases/CreateAddress/CreateAddressController";
import { ReadAddressController } from "../../../../modules/address/useCases/ReadAddress/ReadAddressController";

const addressRouter = Router()

const createAddressController = new CreateAddressController()
const readAddressController = new ReadAddressController()

addressRouter.post("/", createAddressController.handle)
addressRouter.get("/", readAddressController.handle)

export { addressRouter }