import { Router } from "express";

import { ownerRouter } from "./owner.routes";
import { addressRouter } from "./address.routes";

const router = Router()


router.use("/owner", ownerRouter)
router.use("/address", addressRouter)

export { router }