import { Router } from "express";
import { CreateAddressController } from "../../../../modules/address/useCases/CreateAddress/CreateAddressController";
import { ReadAddressController } from "../../../../modules/address/useCases/ReadAddress/ReadAddressController";
import { UpdateAddressController } from "../../../../modules/address/useCases/UpdateAddress/UpdateAddressController";
import { DeleteAddressController } from "../../../../modules/address/useCases/DeleteAddress/DeleteAddressController";


const addressRouter = Router()

const createAddressController = new CreateAddressController()
const readAddressController = new ReadAddressController()
const updateAddressController = new UpdateAddressController()
const deleteAddressController = new DeleteAddressController()


addressRouter.post("/", createAddressController.handle)
addressRouter.get("/", readAddressController.handle)
addressRouter.patch("/", updateAddressController.handle)
addressRouter.delete("/", deleteAddressController.handle)

export { addressRouter }