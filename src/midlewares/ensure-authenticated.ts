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
    const authHeader = req.headers.authorization;
    
    if(!authHeader){
        throw new Error("Token missing")
    }

    const [token] = authHeader.split(' ')
    
    try {
        const {sub: user_id} = JWT.verify(
            token,
            `${process.env.secret_auth_key}`            
        ) as IPayload;

        req.user = {
            uuid: user_id,            
        }

        next()
    } catch (error) {
        throw new Error("Token missing")
    }
    
}

export {ensureAuthenticated}