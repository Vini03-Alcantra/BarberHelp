import { container } from "tsyringe";
import { AddressRepository } from "../../modules/address/infra/repositories/AddressRepository";
import { IAddressRepository } from "../../modules/address/repositories/IAddressRepository";
import { OwnerRepository } from "../../modules/owner/infra/repositories/OwnerRepository";
import { IOwnerRepository } from "../../modules/owner/repositories/IOwnerRepository";

container.registerSingleton<IOwnerRepository>(
    "OwnerRepository",
    OwnerRepository
)

container.registerSingleton<IAddressRepository>(
    "AddressRepository",
    AddressRepository
)