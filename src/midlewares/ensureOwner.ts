import { NextFunction, Request, Response } from "express";
import { OwnerRepository } from "../modules/owner/infra/repositories/OwnerRepository";

async function ensureOwner(
    req: Request,
    res: Response,
    next: NextFunction
) {
    const uuid = req.user?.uuid;

    const ownerRepository = new OwnerRepository();

    if(!uuid){
        throw new Error("Owner invalids")
    }
    const owner = await ownerRepository.findById(uuid);

    if (!owner) {
        throw new Error("Owner don't exists")
    }

    return next()
}