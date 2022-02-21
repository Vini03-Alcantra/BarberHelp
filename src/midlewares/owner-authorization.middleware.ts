import { NextFunction, Request, Response } from "express";
import { OwnerRepository } from "../modules/owner/infra/repositories/OwnerRepository";
import { ForbiddenError } from "./modelsMiddlewares/errors/forbidden.error.model";

async function ownerAuthorizationMiddleware(req: Request, res: Response, next: NextFunction){
    const ownerRepository = new OwnerRepository(); 

    try {
        const authorizationHeader = req.headers['authorization']
        console.log(authorizationHeader)
        if(!authorizationHeader){
            throw new ForbiddenError("Credencias não informadas")
        }

        const [authenticationType, token] = authorizationHeader.split(' ')
        console.log(authenticationType)
        const tokenContent = Buffer.from(token, 'base64').toString('utf-8');

        const [username, password] = tokenContent.split(":")
        console.log(username, password)
        const owner = await ownerRepository.findByEmailAndPassword(username, password)
        console.log(owner)
        if(!owner){
            throw new ForbiddenError('User or password invalids')
        }

        const {id} = owner 

        req.user = {
            uuid: id,
            username,
            password
        }

        next()
    } catch (err) {
        next(err)
    }
}

export {ownerAuthorizationMiddleware}