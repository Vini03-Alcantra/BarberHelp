import {PrismaClient} from "@prisma/client"
import { DataFakeSeeds } from "./data_fakes/DataFakeSeeds";

const prisma = new PrismaClient();

const {owner, address, addressClient} = DataFakeSeeds;



async function main(){
    await prisma.owner.create({
        data: {
            nome: owner.nome,
            email: owner.email,
            phoneNumber: owner.phoneNumber,
            cpf: owner.cpf,
            birthday: owner.birthday,
            password: owner.password
        }
    }),
    await prisma.address.create({
        data: {
            street: address.street,
            number_address: address.number_address,
            complement: address.complement,
            neighborhood: address.neighborhood,
            city: address.city,
            state: address.state,
            cep: address.cep,
            reference_point: address.reference_point 
        }
    }),
    await prisma.addressClient.create({
        data: {
            street: addressClient.street,
            number_address: addressClient.number_address,
            complement: addressClient.complement,
            neighborhood: addressClient.neighborhood,
            city: addressClient.city,
            reference_point: addressClient.city,
            state: addressClient.state,
            cep: addressClient.cep
        }
    })
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })