import { container } from "tsyringe";
import { AddressRepository } from "../../modules/address/infra/repositories/AddressRepository";
import { IAddressRepository } from "../../modules/address/repositories/IAddressRepository";
import { ClientRepository } from "../../modules/client/infra/ClientRepository";
import { IClientRepository } from "../../modules/client/repositories/IClientRepository";
import { IEmployeeRepository } from "../../modules/employee/repositories/IEmployeeRepository";
import { EmployeeRepository } from "../../modules/employee/infra/repositories/EmployeeRepository";
import { EstablishmentRepository } from "../../modules/establishment/infra/repositories/EstablishmentRepository";
import { IEstablishmentRepository } from "../../modules/establishment/repositories/IEstablishmentRepository";
import { OwnerRepository } from "../../modules/owner/infra/repositories/OwnerRepository";
import { IOwnerRepository } from "../../modules/owner/repositories/IOwnerRepository";
import { IServicesRepository } from "../../modules/services/repositories/IServicesRepository";
import { ServiceRepository } from "../../modules/services/infra/repositories/ServiceRepository"
import { IAddressClientRepository } from "../../modules/AddressClient/repositories/IAddressClientRepository";
import { AddressClientRepository } from "../../modules/AddressClient/infra/AddressClientRepository";

container.registerSingleton<IOwnerRepository>(
    "OwnerRepository",
    OwnerRepository
)

container.registerSingleton<IAddressRepository>(
    "AddressRepository",
    AddressRepository
)

container.registerSingleton<IAddressClientRepository>(
    "AddressClientRepository",
    AddressClientRepository
)

container.registerSingleton<IClientRepository>(
    "ClientRepository",
    ClientRepository
)

container.registerSingleton<IEstablishmentRepository>(
    "EstablishmentRepository",
    EstablishmentRepository
)

container.registerSingleton<IEmployeeRepository>(
    "EmployeeRepository",
    EmployeeRepository
)

container.registerSingleton<IServicesRepository>(
    "ServiceRepository",
    ServiceRepository
)