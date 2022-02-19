import { NextFunction, Request, Response } from "express";
import status from "http-status"

function errorHandler(error: any, req: Request,res: Response, next: NextFunction){
    if (error) {
        res.sendStatus(status.BAD_REQUEST)
    } else if(error){
        res.sendStatus(status.FORBIDDEN)
    } else {
        res.sendStatus(status.INTERNAL_SERVER_ERROR)
    }
}

export {errorHandler}