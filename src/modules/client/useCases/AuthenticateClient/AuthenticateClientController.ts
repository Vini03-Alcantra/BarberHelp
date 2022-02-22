import { Response, Request } from "express";
import {AuthenticateClientUseCase} from "./AuthenticateClientUseCase";
import { container } from "tsyringe";

class AuthenticateClientController {
    async handle(req: Request, res: Response){
        const {email, password} = req.body;

        try {
            const authenticateClientUseCase = container.resolve(
                AuthenticateClientUseCase
            )

            const token = await authenticateClientUseCase.execute({email, password})

            return res.status(201).json(token)
        } catch (error) {
            return res.status(401).json({"msg": "Operação Indisponível"})
        }
    }
}

export {AuthenticateClientController}