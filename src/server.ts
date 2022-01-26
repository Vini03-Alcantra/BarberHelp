import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function main() {
    const result = await prisma.address.create({
        data: {
            cep: "60442056",
            city: "Fortaleza",
            complement: "Nothing",
            neighborhood: "Montese",
            number_address: 44,
            reference_point: "Colégio SESC",
            state: "Ceará",
            street: "Rua Oscár Bezerra",
        }
    });

    console.log(result)
}

main()