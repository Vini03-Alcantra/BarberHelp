import { Ordered, PrismaClient } from ".prisma/client";
import { logger } from "../../../../logger";
import { DayjsDateProvider } from "../../../../shared/container/provider/DateProvider/implementations/DayjsDateProvider";
import { ICreateOrderedDTO } from "../../dtos/ICreateOrderedDTO";
import { IOrderedRepository } from "../../repositories/IOrderedRepository";

const prisma = new PrismaClient()

class OrderedRepository implements IOrderedRepository {
    private providerDate: DayjsDateProvider;
    
    constructor(){
        this.providerDate = new DayjsDateProvider()
    }    

    async create({
        service_id,
        appointment,
        fk_client_id,
        fk_establishment_id,
        fk_employee_id,
    }: ICreateOrderedDTO): Promise<void> {
        const service = await prisma.services.findFirst({
            where: {
                id: service_id
            }
        })

        const hourCloseTime = this.providerDate.convertFromDateToTime(appointment, service?.duration!)
        const dateConvert = new Date(appointment)

        try {            
            await prisma.ordered.create({
                data: {
                    ordered_Services: {
                        create: {
                            service: {
                                connect: {
                                    id: service_id
                                }
                            }
                        }
                    },
                    appointment: dateConvert,
                    closing_time: hourCloseTime,
                    fk_client_id,
                    fk_establishment_id,
                    fk_employee_id
                }
            })
        } catch (error) {
            logger.info(error)
        }
    }

    async findById(id: string): Promise<Ordered | null> {
        try {            
            const ordered = await prisma.ordered.findFirst({
                where: { id }
            })
    
            return ordered
        } catch (error) {
            logger.info(error)
            if (error instanceof Error) {                
                throw new Error(error.message)
            }
            throw new Error("Error")
        }
    }

    async delete(id: string): Promise<boolean> {
        try {
            const result = await this.findById(id)

            if (!(result)) {
                return false
            }

            const ordered = await prisma.ordered.delete({
                where: { id }
            })

            if (!(ordered)) {
                return false
            }

            return true
        } catch (error) {
            logger.info(error)
            if (error instanceof Error) {                
                throw new Error(error.message)
            }
            throw new Error("Error")
        }
    }

    async update(
        user_id: string,
        service_id: string,
        {
            appointment,
            fk_client_id,
            fk_establishment_id,
            fk_employee_id
        }: ICreateOrderedDTO): Promise<boolean> {
        try {
            const result = await this.findById(user_id)

            if (!(result)) {
                return false
            }

            const updateOrdered = await prisma.ordered.update({
                where: {
                    id: user_id
                },
                data: {
                    ordered_Services: {
                        connect: {
                            id: service_id
                        }
                    },
                    appointment,
                    fk_client_id,
                    fk_establishment_id,
                    fk_employee_id
                }
            })

            if (!(updateOrdered)) {
                return false
            }

            return true
        } catch (error) {
            logger.info(error)
            if (error instanceof Error) {                
                throw new Error(error.message)
            }
            throw new Error("Error")
        }
    }


    async read(): Promise<Ordered[]> {
        try {
            const result = await prisma.ordered.findMany({
                where: {
                    confirmed: true
                },
                orderBy: {appointment: 'desc'}
            })
            
            return result
        } catch (error) {
            logger.info(error)
            if (error instanceof Error) {                
                throw new Error(error.message)
            }
            throw new Error("Error")
        }
    }

    async readAllOrdereds(): Promise<Ordered[]> {
        try {
            const result = await prisma.ordered.findMany({
                orderBy: {appointment: 'desc'}
            })
            
            return result
        } catch (error) {
            logger.info(error)
            if (error instanceof Error) {                
                throw new Error(error.message)
            }
            throw new Error("Error")
        }
    }

    async readOnlyOrderedsFalse(): Promise<Ordered[]> {
        try {
            const result = await prisma.ordered.findMany({
                where: {
                    confirmed: false
                },
                orderBy: {appointment: 'desc'}
            })
            
            return result
        } catch (error) {
            logger.info(error)
            if (error instanceof Error) {                
                throw new Error(error.message)
            }
            throw new Error("Error")
        }
    }

    async updateConfirmed(idOrdereed: string): Promise<void> {
        try {
            await prisma.ordered.update({
                where: {id: idOrdereed},
                data: {
                    confirmed: true
                }
            })
        } catch (error) {
            logger.info(error)
            if (error instanceof Error) {                
                throw new Error(error.message)
            }
            throw new Error("Error")
        }
    }

    async updateDone(idOrdered: string): Promise<void> {
        try {
            await prisma.ordered.update({
                where: {id: idOrdered},
                data: {
                    finish: true
                }
            })
        } catch (error) {
            logger.info(error)
            if (error instanceof Error) {                
                throw new Error(error.message)
            }
            throw new Error("Error")
        }
    }
}

export { OrderedRepository }