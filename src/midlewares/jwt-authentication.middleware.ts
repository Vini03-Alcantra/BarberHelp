import { Request, Response, NextFunction } from "express";
import JWT from 'jsonwebtoken'

async function jwtAuthenticationMiddleware(req: Request, res: Response, next: NextFunction){
    try {
        const authorizationHeader = req.headers['authorization'];

        if(!authorizationHeader){
            throw new ForbiddenError("Credenciais não informadas")
        }

        
    } catch (error) {
        
    } 
}

export {jwtAuthenticationMiddleware}