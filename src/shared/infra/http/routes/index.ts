import { Router } from "express";

import { ownerRouter } from "./owner.routes";
import { addressRouter } from "./address.routes";
import { clientRouter } from "./client.routes";

const router = Router()


router.use("/owner", ownerRouter)
router.use("/address", addressRouter)
router.use("/client", clientRouter)

export { router }