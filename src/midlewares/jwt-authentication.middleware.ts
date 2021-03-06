import { Request, Response, NextFunction } from "express";
import JWT from 'jsonwebtoken'
import { ForbiddenError } from "./modelsMiddlewares/errors/forbidden.error.model";

async function jwtAuthenticationMiddleware(req: Request, res: Response, next: NextFunction){
    const authorizationHeader = req.headers['authorization'];

    if(!authorizationHeader){
        throw new ForbiddenError("Credenciais não informadas")
    }

    try {                
        const [authenticationType, token] = authorizationHeader.split(' ');

        if(authenticationType !== "Bearer" || !token){
            throw new ForbiddenError("Autenticação inválida")        
        }

        try {
            const tokenPayload = JWT.verify(token, `${process.env.secret_auth_key}`);
            
            if (typeof tokenPayload !== 'object' || !tokenPayload.sub) {
                throw new ForbiddenError('Token inválido')
            }

            req.user = {
                uuid: tokenPayload.sub
            };

            next();
        } catch (err) {
            console.log(err)
            throw new ForbiddenError("Operação Indisponível")
        } 
    } catch (error) {
        next(error)   
    }
}

export {jwtAuthenticationMiddleware}