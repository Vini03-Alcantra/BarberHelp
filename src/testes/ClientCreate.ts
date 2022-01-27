import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function main() {
    const result = await prisma.client.create({
        data: {
            nome: "Vinícius de Alcântra",
            cpf: "61096200333",
            birthday: "2022-01-27",
            phoneNumber: "(85) 996262807",
            password: "12345678",
            AddressClient: {
                connectOrCreate: {
                    where: {
                        id: "1"
                    },
                    create: {
                        street: "Rua Oscár Bezerra",
                        number_address: 44,
                        neighborhood: "Couto Fernandes",
                        city: "Fortaleza",
                        state: "Ceara",
                        cep: "60442056",
                        reference_point: "Perto do Colégio Sesc",
                    }
                }
            }
        }
    })

    console.log(result)
}


main()