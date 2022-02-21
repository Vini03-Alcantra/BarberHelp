import { Request, Response } from "express"
import { container } from "tsyringe";

import {AuthenticateOwnerUseCase} from "./AuthenticateOwnerUseCase"

class AuthenticateOwnerController {
    async handle(req: Request, res: Response): Promise<Response>{
        const {password, email} = req.body;
    
        const authenticateOwnerUseCase = container.resolve(AuthenticateOwnerUseCase)
        
        try {
            const token = await authenticateOwnerUseCase.execute({
                email,
                password
            })

            return res.status(200).json(token)
        } catch (err) {
            return res.status(500).json(err)
        }
    }
}

export {AuthenticateOwnerController}