import { Owner, PrismaClient } from "@prisma/client";
import "reflect-metadata";
import { container } from "tsyringe";

import {CreateOwnerUseCase} from "./CreateOwnerUseCase";
import "../../../../shared/container/index";

describe("Create owner", () => {         
    const createOwnerUseCase = container.resolve(CreateOwnerUseCase)
    it("must be possible create a owner", async () => {        
        const ownerData = {
            nome: "Sansa Stark",
            cpf: "4858503853",
            birthday: "14/10/1981",
            email: "sansa@email.com",
            phoneNumber: "91 983913849",
            password: "12345678"
        }

        await createOwnerUseCase.execute(ownerData);      
    })

    it("Should not be able to create an existing owner", async () => {
        const ownerData = {
            nome: "Eddard Stark",
            cpf: "667312312345",
            birthday: "14/10/1999",
            email: "arya@email.com",
            phoneNumber: "91 983913849",
            password: "12345678"
        }

        await createOwnerUseCase.execute(ownerData);

        await expect(createOwnerUseCase.execute(ownerData)).rejects.toEqual(
            new Error("Este cpf já existe")
        )
    })
})