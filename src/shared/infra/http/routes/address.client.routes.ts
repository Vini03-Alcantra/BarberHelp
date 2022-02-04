import { Router } from "express";

import { CreateAddressClientController } from "../../../../modules/AddressClient/useCases/CreateAddressClient/CreateAddressClientController";
import { ReadAddressClientController } from "../../../../modules/AddressClient/useCases/ReadAddress/ReadClientAddressController";
import { UpdateAddressController } from "../../../../modules/AddressClient/useCases/UpdateAddressClient/UpdateClientAddressController";
import { DeleteAddressClientController } from "../../../../modules/AddressClient/useCases/DeleteAddress/DeleteClientAddressController";

const createAddressClientController = new CreateAddressClientController()
const readAddressClientController = new ReadAddressClientController()
const updateAddressController = new UpdateAddressController()
const deleteAddressController = new DeleteAddressClientController()

const addressClientRouter = Router()

addressClientRouter.post("/", createAddressClientController.handle)
addressClientRouter.get("/", readAddressClientController.handle)
addressClientRouter.patch("/", updateAddressController.handle)
addressClientRouter.delete("/", deleteAddressController.handle)

export { addressClientRouter }

