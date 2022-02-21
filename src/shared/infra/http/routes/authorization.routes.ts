import {NextFunction, Request, Response, Router} from "express"
import { ForbiddenError } from "../../../../midlewares/modelsMiddlewares/errors/forbidden.error.model" 
import JWT, { SignOptions } from "jsonwebtoken"
import status from "http-status"
import { jwtAuthenticationMiddleware } from "../../../../midlewares/jwt-authentication.middleware";
import { ownerAuthorizationMiddleware } from "../../../../midlewares/owner-authorization.middleware";
import { AuthenticateOwnerController } from "../../../../modules/owner/useCases/authenticateOwner/AuthenticateOwnerController";

const authorizationRoute = Router()
const authenticateOwner = new AuthenticateOwnerController()


// authorizationRoute.post("/token", ownerAuthorizationMiddleware, async(req: Request, res: Response, next: NextFunction) => {
//     try {
//         const {user} = req;

//         if(!user){
//             throw new ForbiddenError("Usuário não informado")
//         }

//         const jwtPayload = {username: user.username, subject: user.uuid};
//         const jwtOptions: SignOptions = {expiresIn: "1m"}
//         const secret_key = 'my_secret_key';

//         const jwt = JWT.sign(jwtPayload, secret_key, jwtOptions)

//         res.status(status.OK).json({token: jwt})
//     } catch (error) {
//         next(error)        
//     }
// })
authorizationRoute.post("/sessions", authenticateOwner.handle);


authorizationRoute.post("/token/validate", jwtAuthenticationMiddleware, async(req: Request, res: Response) => {
    res.sendStatus(status.OK)
})

export {authorizationRoute}