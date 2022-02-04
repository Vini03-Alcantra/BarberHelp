import { Establishment, PrismaClient } from "@prisma/client"
import { ICreateEstablishmentDTO } from "../../dtos/ICreateEstablishmentDTO"
import { IEstablishmentRepository } from "../../repositories/IEstablishmentRepository"

const prisma = new PrismaClient()

class EstablishmentRepository implements IEstablishmentRepository {
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
                    fk_id_address: fk_id_address,
                    fk_owner_id: fk_id_owner,
                }
            })
        } catch (err) {
            console.log(err)
        }
    }
    async findById(id: string): Promise<Establishment | null> {
        const establishment = await prisma.establishment.findFirst({
            where: {
                id
            }
        })

        return establishment
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
    }

    async delete(id: string): Promise<boolean> {
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
    }

}

export { EstablishmentRepository }