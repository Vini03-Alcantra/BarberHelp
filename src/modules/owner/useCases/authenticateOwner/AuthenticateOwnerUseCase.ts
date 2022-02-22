import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";
import { IOwnerRepository } from "../../repositories/IOwnerRepository";

interface IRequest {
    email: string;
    password: string;
}

interface IResponse {
    owner: {
        nome: string,
        email: string
    },
    token: string;
}

@injectable()
class AuthenticateOwnerUseCase {
    constructor(
        @inject("OwnerRepository")
        private ownerRepository: IOwnerRepository
    ) { }

    async execute({email, password}: IRequest): Promise<IResponse>{
        const owner = await this.ownerRepository.findByEmail(email);
        
        if(!owner){
            throw new Error("Email or password incorrect")
        }
        
        // const passwordMatch = await compare(password.toString(), owner.password.toString())
        if(password !== owner.password){
            
            throw new Error("Email or password incorrect")
        }
        
        // if(!passwordMatch){
        //     throw new Error("Email or password incorrect")
        // }
        
        const token = sign({}, `${process.env.secret_auth_key}`, {
            subject: owner.id,
            expiresIn: process.env.expires_in_token
        })

        const tokenReturn: IResponse = {
            token,
            owner: {
                nome: owner.nome,
                email: owner.email
            }
        }

        return tokenReturn
    }

}

export {AuthenticateOwnerUseCase}