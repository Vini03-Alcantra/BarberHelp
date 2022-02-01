interface ICreateAddressClientDTO {
    street: string
    number_address: number;
    complement?: string;
    neighborhood: string;
    city: string;
    reference_point: string;
    state: string;
    cep: string;
}

export { ICreateAddressClientDTO }