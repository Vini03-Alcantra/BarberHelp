import { Router } from "express";

import { ownerRouter } from "./owner.routes";

const router = Router()


router.use("/owner", ownerRouter)

export { router }