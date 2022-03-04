import "reflect-metadata";
import { container } from "tsyringe";
import "../../../../shared/container/index";

import {CreateAddressUseCase} from "./CreateAddressUseCase"

describe("Create Address", () => {
    const createAddressUseCase = container.resolve(CreateAddressUseCase)

    it("must be possible", async () => {
        const address = {
            street: "The Crownlands",
            number_address: 43,
            complement: "",
            neighborhood: "Poço das pulgas",
            city: "Kings Landing",
            state: "Winterfell",
            cep: "60712354344",
            reference_point: "Perto do porto"
        }

        await createAddressUseCase.execute(address)
    })

})