import {NextFunction, Request, Response, Router} from "express"
import { ForbiddenError } from "../../../../midlewares/modelsMiddlewares/errors/forbidden.error.model" 

import status from "http-status"
import { jwtAuthenticationMiddleware } from "../../../../midlewares/jwt-authentication.middleware";
import { AuthenticateOwnerController } from "../../../../modules/owner/useCases/authenticateOwner/AuthenticateOwnerController";
import { AuthenticateClientController } from "../../../../modules/client/useCases/AuthenticateClient/AuthenticateClientController";

const authorizationRoute = Router()

const authenticateOwner = new AuthenticateOwnerController();
const authenticateClientController = new AuthenticateClientController();

authorizationRoute.post("/sessions/owner", authenticateOwner.handle);
authorizationRoute.post("/sessions", authenticateClientController.handle)
authorizationRoute.post("/token/validate", jwtAuthenticationMiddleware, async(req: Request, res: Response) => {
    res.sendStatus(status.OK)
})

export {authorizationRoute}