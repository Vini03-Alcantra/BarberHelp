import request from "supertest";
import {app} from "../../../../shared/infra/http/app";

describe("Create Owner Controller", () => {
    it("Should be able to create a new user", async () => {
        const response = await request(app).post("/owner").send({
            nome: "Cersei Lannister",
            cpf: "9830234923",
            birthday: "4/2/1971",
            email: "cersei@email.com",
            phoneNumber: "91 913911249",
            password: "12345678"
        })

        console.log(response)
    })
})