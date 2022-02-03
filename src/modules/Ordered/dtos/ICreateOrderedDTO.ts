interface ICreateOrderedDTO {
    appointment: Date;
    fk_client_id: string;
    fk_establishment_id: string;
    fk_employee_id: string;
}

export { ICreateOrderedDTO }