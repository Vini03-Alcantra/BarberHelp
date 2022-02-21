import { NextFunction, Request, Response } from "express";
import { OwnerRepository } from "../modules/owner/infra/repositories/OwnerRepository";
import { ForbiddenError } from "./modelsMiddlewares/errors/forbidden.error.model";

async function ownerAuthorizationMiddleware(req: Request, res: Response, next: NextFunction){
    const ownerRepository = new OwnerRepository(); 

    try {
        const {email, password} = req.body;
        
        if(!email || !password){
            throw new ForbiddenError("Credencias não informadas")
        }
        
        const owner = await ownerRepository.findByEmailAndPassword(email, password)
        
        if(!owner){
            throw new ForbiddenError('User or password invalids')
        }

        const {id} = owner 

        req.user = {
            uuid: id,
            username: email,
            password
        }

        next()
    } catch (err) {
        next(err)
    }
}

export {ownerAuthorizationMiddleware}