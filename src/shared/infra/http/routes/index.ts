import { Router } from "express";

import { ownerRouter } from "./owner.routes";
import { addressRouter } from "./address.routes";
import { clientRouter } from "./client.routes";
import { establishmentRouter } from "./establishment.routes";
import { employeeRouter } from "./employee.routes";
import { servicesRouter } from "./services.routes";
import { addressClientRouter } from "./address.client.routes";
import { orderedRouter } from "./ordered.routes";
import { authorizationRoute } from "./authorization.routes";
import { ensureAuthenticated } from "../../../../midlewares/ensure-authenticated";
import { ensureOwner } from "../../../../midlewares/ensureOwner";

const router = Router()

router.use("/owner", ownerRouter)
router.use("/address", ensureAuthenticated, ensureOwner, addressRouter)
router.use("/client", clientRouter)
router.use("/establishment", ensureAuthenticated, ensureOwner, establishmentRouter)
router.use("/employee", ensureAuthenticated, ensureOwner, employeeRouter)
router.use("/services", ensureAuthenticated, ensureOwner, servicesRouter)
router.use("/addressClient", ensureAuthenticated, addressClientRouter)
router.use("/ordered", ensureAuthenticated, orderedRouter)
router.use("/authorization", authorizationRoute)

export { router }