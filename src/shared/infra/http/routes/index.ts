import { Router } from "express";

import { ownerRouter } from "./owner.routes";
import { addressRouter } from "./address.routes";
import { clientRouter } from "./client.routes";
import { establishmentRouter } from "./establishment.routes";
import { employeeRouter } from "./employee.routes";


const router = Router()


router.use("/owner", ownerRouter)
router.use("/address", addressRouter)
router.use("/client", clientRouter)
router.use("/establishment", establishmentRouter)
router.use("/employee", employeeRouter)

export { router }