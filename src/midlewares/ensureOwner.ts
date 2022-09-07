import { NextFunction, Request, Response } from "express";
import { OwnerRepository } from "../modules/owner/infra/repositories/OwnerRepository";

async function ensureOwner(
    req: Request,
    res: Response,
    next: NextFunction
) {
    const uuid = req.user?.uuid;    

    if(!uuid){
        throw new Error("Owner invalid's")
    }

    const ownerRepository = new OwnerRepository();
    
    const owner = await ownerRepository.findById(uuid);

    if (!owner) {
        throw new Error("Owner don't exists")
    }

    return next()
}

export {ensureOwner}