import { NextFunction, Request, Response } from "express";
import status from "http-status"
import { DatabaseError } from "./modelsMiddlewares/errors/database.error.model";
import { ForbiddenError } from "./modelsMiddlewares/errors/forbidden.error.model";

function errorHandler(error: any, req: Request,res: Response, next: NextFunction){
    if (error instanceof DatabaseError) {
        res.sendStatus(status.BAD_REQUEST)
    } else if(error instanceof ForbiddenError){
        res.sendStatus(status.FORBIDDEN)
    } else {
        res.sendStatus(status.INTERNAL_SERVER_ERROR)
    }
}

export {errorHandler}