interface ICreateOrderedDTO {
    service_id: string;
    appointment: string;
    fk_client_id: string;
    fk_establishment_id: string;
    fk_employee_id: string;
}

export { ICreateOrderedDTO }