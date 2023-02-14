import { Establishment, PrismaClient } from "@prisma/client"
import { logger } from "../../../../logger"
import { DayjsDateProvider } from "../../../../shared/container/provider/DateProvider/implementations/DayjsDateProvider"
import { ICreateEstablishmentDTO } from "../../dtos/ICreateEstablishmentDTO"
import { IEstablishmentRepository } from "../../repositories/IEstablishmentRepository"

const prisma = new PrismaClient()

class EstablishmentRepository implements IEstablishmentRepository {
    private providerDate: DayjsDateProvider;

    constructor(){
        this.providerDate = new DayjsDateProvider()
    }    

    async create(fk_id_address: string, fk_id_owner: string, {
        name,
        phone,
        email,
        StartHour,
        EndHour,
        StopHourLunch,
        ReturnHourLunch,
    }: ICreateEstablishmentDTO
    ): Promise<void> {
        try {
            await prisma.establishment.create({
                data: {
                    name,
                    phoneContact: phone,
                    email_contact: email,
                    start_hour: StartHour,
                    end_hour: EndHour,
                    stop_hour_lunch: StopHourLunch,
                    return_hour_lunch: ReturnHourLunch,
                    fk_owner_id: fk_id_owner,
                    fk_id_address: fk_id_address,
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

    async findById(id: string): Promise<Establishment | null> {
        try {            
            const establishment = await prisma.establishment.findFirst({
                where: { id }
            })
    
            return establishment
        } catch (error) {
            logger.info(error)
            if (error instanceof Error) {                
                throw new Error(error.message)
            }
            throw new Error("Error")
        }
    }

    async update(id: string, {
        name,
        phone,
        email,
        StartHour,
        EndHour,
        StopHourLunch,
        ReturnHourLunch
    }: ICreateEstablishmentDTO): Promise<void> {
        try {
            const idEstablishment = await this.findById(id)
    
            if (!(idEstablishment)) {
                return
            }
    
            await prisma.establishment.update({
                where: { id },
                data: {
                    name,
                    phoneContact: phone,
                    email_contact: email,
                    start_hour: StartHour,
                    end_hour: EndHour,
                    stop_hour_lunch: StopHourLunch,
                    return_hour_lunch: ReturnHourLunch
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

    async delete(id: string): Promise<boolean> {        
        try {
            const establishmentId = await this.findById(id)
    
            if (!(establishmentId)) {
                return false
            }
    
            const result = await prisma.establishment.delete({
                where: { id }
            })
    
            if (!(result)) {
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

    async listEstablishmentByOwner(owner_id: string): Promise<Establishment[]> {
        try {
            const establishments = await prisma.establishment.findMany({
                where: {
                    fk_owner_id: owner_id
                }
            })
    
            return establishments            
        } catch (error) {
            logger.info(error)
            if (error instanceof Error) {                
                throw new Error(error.message)
            }
            throw new Error("Error")
        }
    }

    // async listTodayTime(idEstablishment: string): Promise<string> {
    //     try {
    //         await prisma.ordered.findMany({
    //             where: {
    //                 AND: [
    //                     {fk_establishment_id: {equals: idEstablishment}},
    //                     {appointment: {equals: this.providerDate.dateNow()}}
    //                 ]
    //             }
    //         })
            
    //     } catch (error) {
    //         logger.info(error)
    //         if (error instanceof Error) {                
    //             throw new Error(error.message)
    //         }
    //         throw new Error("Error")
    //     }
    // }
}

export { EstablishmentRepository }