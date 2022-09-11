import { compare } from "bcrypt";
import { sign } from "jsonwebtoken"
import { inject, injectable } from "tsyringe"
import { IClientRepository } from "../../repositories/IClientRepository"

interface IRequest {
    email: string;
    password: string;
}
interface IResponse {
    user: {
        name: string,
        email: string
    },
    token: string
}

@injectable()
class AuthenticateClientUseCase {
    constructor(
        @inject("ClientRepository")
        private clientRepository: IClientRepository
    ) { }   

    async execute({email, password}: IRequest) {
        const client = await this.clientRepository.findByEmail(email)

        if(!client) throw new Error("Email or Password Incorrect")        
        const passwordMatch = await compare(password, client.password)

        if(!passwordMatch){
            throw new Error("Email or Password Incorrect")
        }

        const token = sign({}, `${process.env.secret_auth_key}`, {
            subject: client.id,
            expiresIn: process.env.expires_in_token
        });

        const tokenReturn: IResponse = {
            token,
            user: {
                name: client.nome,
                email: client.email
            }
        }

        return tokenReturn
    }
}

export {AuthenticateClientUseCase}