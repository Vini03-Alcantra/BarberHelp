import { Router } from "express";
import { CreateAddressController } from "../../../../modules/address/useCases/CreateAddress/CreateAddressController";

const addressRouter = Router()

const createAddressController = new CreateAddressController()

addressRouter.post("/", createAddressController.handle)

export { addressRouter }