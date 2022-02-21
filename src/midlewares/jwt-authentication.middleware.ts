import { Request, Response, NextFunction } from "express";
import JWT from 'jsonwebtoken'
import { ForbiddenError } from "./modelsMiddlewares/errors/forbidden.error.model";

async function jwtAuthenticationMiddleware(req: Request, res: Response, next: NextFunction){
    try {        
        const authorizationHeader = req.headers['authorization'];

        if(!authorizationHeader){
            throw new ForbiddenError("Credenciais não informadas")
        }

        const [authenticationType, token] = authorizationHeader.split(' ');

        if(authenticationType !== "Bearer" || !token){
            throw new ForbiddenError("Autenticação inválida")        
        }
        
        try {
            const tokenPayload = JWT.verify(token, 'my_secret_key');
            console.log(tokenPayload)
            console.log(token)
            if (typeof tokenPayload !== 'object' || !tokenPayload.subject) {
                throw new ForbiddenError('Token inválido')
            }

            const user = {
                uuid: tokenPayload.sub,
                username: tokenPayload.username
            };

            req.user = user;

            next();
        } catch (error) {
            throw new ForbiddenError("Token inválido")
        } 
    } catch (error) {
        next(error)   
    }
}

export {jwtAuthenticationMiddleware}