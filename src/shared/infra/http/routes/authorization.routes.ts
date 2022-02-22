import {NextFunction, Request, Response, Router} from "express"
import { ForbiddenError } from "../../../../midlewares/modelsMiddlewares/errors/forbidden.error.model" 
import JWT, { SignOptions } from "jsonwebtoken"

import status from "http-status"
import { jwtAuthenticationMiddleware } from "../../../../midlewares/jwt-authentication.middleware";
import { AuthenticateOwnerController } from "../../../../modules/owner/useCases/authenticateOwner/AuthenticateOwnerController";

const authorizationRoute = Router()
const authenticateOwner = new AuthenticateOwnerController()

authorizationRoute.post("/sessions/owner", authenticateOwner.handle);
authorizationRoute.post("/sessions", )
authorizationRoute.post("/token/validate", jwtAuthenticationMiddleware, async(req: Request, res: Response) => {
    res.sendStatus(status.OK)
})

export {authorizationRoute}