import { Response, Request, NextFunction } from "express";
import JWT from 'jsonwebtoken'

interface IPayload {
    sub: string;
}

async function ensureAuthenticated(
    req: Request,
    res: Response,
    next: NextFunction
) {
    try {
        const authHeader = req.headers.authorization;

    if(!authHeader){
        throw new Error("Token missing")
    }

    const [, token] = authHeader.split(' ')

    try {
        // const {sub: user_id} = verify(
        //     token,
        //     'my_secret_key'            
        // ) as IPayload;
        const tokenPayoad = JWT.verify(token, 'my_secret_key')

        if(typeof tokenPayoad !== 'object' || !tokenPayoad.subject){
            throw new Error("Token missing")
        }

        req.user = {
            uuid: tokenPayoad.sub,
            username: tokenPayoad.username
        }

        next()
    } catch (error) {
        throw new Error("Token missing")
    }
    } catch (error) {
        next(error)
    }
}

export {ensureAuthenticated}