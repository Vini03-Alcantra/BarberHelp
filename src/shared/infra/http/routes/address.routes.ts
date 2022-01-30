import { Router } from "express";
import { CreateAddressController } from "../../../../modules/address/useCases/CreateAddress/CreateAddressController";
import { ReadAddressController } from "../../../../modules/address/useCases/ReadAddress/ReadAddressController";
import { UpdateAddressController } from "../../../../modules/address/useCases/UpdateAddress/UpdateAddressController";

const addressRouter = Router()

const createAddressController = new CreateAddressController()
const readAddressController = new ReadAddressController()
const updateAddressController = new UpdateAddressController()

addressRouter.post("/", createAddressController.handle)
addressRouter.get("/", readAddressController.handle)
addressRouter.patch("/", updateAddressController.handle)

export { addressRouter }