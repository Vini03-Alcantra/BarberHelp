import request from "supertest";
import {app} from "../../../../shared/infra/http/app";

describe("Create address Controller", () => {
    it("Should be able to create a new address", async () => {
        const response = await request(app).post("/address").send({
            street: "The Crownlands",
            number_address: 43,
            complement: "",
            neighborhood: "Poço das pulgas",
            city: "Kings Landing",
            state: "Winterfell",
            cep: "60712354344",
            reference_point: "Perto do porto"
        })
    })
})