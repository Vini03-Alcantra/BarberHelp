import request from "supertest"
import {app} from "../../../../shared/infra/http/app";

describe("Create Owner Controller", () => {
    it("Should be able to create a new user", async () => {
        const response = await request(app).post("/owner").send({
            nome: "Cathelyn Stark",
            cpf: "4348503853",
            birthday: "14/7/1981",
            email: "cathelyn@email.com",
            phoneNumber: "91 913913849",
            password: "12345678"
        })

        console.log(response)
    })
})