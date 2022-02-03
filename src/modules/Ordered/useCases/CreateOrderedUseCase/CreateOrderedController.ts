import { Ordered, PrismaClient } from "@prisma/client";
import { ICreateOrderedDTO } from "../../dtos/ICreateOrderedDTO";
import { IOrderedRepository } from "../../repositories/IOrderedRepository";

const prisma = new PrismaClient()

class OrderedRepository implements IOrderedRepository {
    async create(
        service_id: string,
        {
            appointment,
            fk_client_id,
            fk_establishment_id,
            fk_employee_id
        }: ICreateOrderedDTO): Promise<void> {
        try {
            await prisma.ordered.create({
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
        } catch (error) {
            console.error(error)
        }


    }

    async read(): Promise<Ordered[]> {
        const ordered = await prisma.ordered.findMany()

        return ordered
    }

    async findById(id: string): Promise<Ordered | null> {
        const ordered = await prisma.ordered.findFirst({
            where: { id }
        })

        return ordered
    }

    async update(ordered_id: string,
        {
            appointment,
            fk_client_id,
            fk_establishment_id,
            fk_employee_id
        }: ICreateOrderedDTO): Promise<void> {
        const address = await prisma.ordered.update({
            where: {
                id: ordered_id
            },
            data: {
                appointment,
                fk_client_id,
                fk_establishment_id,
                fk_employee_id,
                updated_at: new Date()
            }
        })

        if (!(address)) {
            return
        }



    }

    async delete(id: string): Promise<boolean> {
        const ordered = await prisma.ordered.findFirst({
            where: { id }
        })

        if (!(ordered)) {
            return false
        }

        const orderedDeleted = await prisma.ordered.delete({
            where: { id }
        })

        if (!(orderedDeleted)) {
            return false
        }

        return true
    }
}

export { OrderedRepository }