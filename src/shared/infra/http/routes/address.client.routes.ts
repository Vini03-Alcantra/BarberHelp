import { Router } from "express";

import { CreateAddressClientController } from "../../../../modules/AddressClient/useCases/CreateAddressClient/CreateAddressClientController";
import { ReadAddressClientController } from "../../../../modules/AddressClient/useCases/ReadAddress/ReadClientAddressController";
import { UpdateAddressController } from "../../../../modules/address/useCases/UpdateAddress/UpdateAddressController";
import { DeleteAddressController } from "../../../../modules/address/useCases/DeleteAddress/DeleteAddressController";

const createAddressClientController = new CreateAddressClientController()
const readAddressClientController = new ReadAddressClientController()
const updateAddressController = new UpdateAddressController()
const deleteAddressController = new DeleteAddressController()

const addressClientRouter = Router()

addressClientRouter.post("/", createAddressClientController.handle)
addressClientRouter.get("/", readAddressClientController.handle)
addressClientRouter.patch("/", updateAddressController.handle)
addressClientRouter.delete("/", deleteAddressController.handle)

export { addressClientRouter }

