import { container } from "tsyringe";
import { OwnerRepository } from "../../modules/owner/infra/repositories/OwnerRepository";
import { IOwnerRepository } from "../../modules/owner/repositories/IOwnerRepository";

container.registerSingleton<IOwnerRepository>(
    "OwnerRepository",
    OwnerRepository
)