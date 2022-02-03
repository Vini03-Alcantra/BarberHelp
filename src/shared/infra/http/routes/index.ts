import { Router } from "express";

import { ownerRouter } from "./owner.routes";
import { addressRouter } from "./address.routes";
import { clientRouter } from "./client.routes";
import { establishmentRouter } from "./establishment.routes";
import { employeeRouter } from "./employee.routes";
import { servicesRouter } from "./services.routes";
import { addressClientRouter } from "./address.client.routes";
import { orderedRouter } from "./ordered.routes";


const router = Router()


router.use("/owner", ownerRouter)
router.use("/address", addressRouter)
router.use("/client", clientRouter)
router.use("/establishment", establishmentRouter)
router.use("/employee", employeeRouter)
router.use("/services", servicesRouter)
router.use("/addressClient", addressClientRouter)
router.use("/ordered", orderedRouter)

export { router }