import {PrismaClient} from "@prisma/client"

const prisma = new PrismaClient();

async function main(){
    await prisma.owner.create({
        data: {
            nome: "Robb Stark",
            email: "robbstark@got.com",
            phoneNumber: "85988124209",
            cpf: "19812349609",
            birthday: "20/09/1987",
            password: "12345678"
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