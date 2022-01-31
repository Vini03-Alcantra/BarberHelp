interface ICreateAddressDTO {
    street: string
    number_address: number
    complement?: string;
    neighborhood: string
    city: string
    state: string;
    cep: string;
    reference_point: string;
}

export { ICreateAddressDTO }