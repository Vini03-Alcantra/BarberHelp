import { Router } from "express";
import { ensureAuthenticated } from "../../../../midlewares/ensure-authenticated";
import { ensureOwner } from "../../../../midlewares/ensureOwner";

const ownerEstablishmentRouter = Router()

ownerEstablishmentRouter.get("", )

export {ownerEstablishmentRouter}