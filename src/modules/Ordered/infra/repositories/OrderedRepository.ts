import { Ordered, PrismaClient } from ".prisma/client";
import { ICreateOrderedDTO } from "../../dtos/ICreateOrderedDTO";
import { IOrderedRepository } from "../../repositories/IOrderedRepository";

const prisma = new PrismaClient()

class OrderedRepository implements IOrderedRepository {
    async create({
        service_id,
        appointment,
        fk_client_id,
        fk_establishment_id,
        fk_employee_id,
    }: ICreateOrderedDTO): Promise<void> {
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
                appointment,
                fk_client_id,
                fk_establishment_id,
                fk_employee_id
            }
        })
    }

    async findById(id: string): Promise<Ordered | null> {
        const ordered = await prisma.ordered.findFirst({
            where: { id }
        })

        return ordered
    }

    async delete(id: string): Promise<boolean> {
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
    }


    async read(): Promise<Ordered[]> {
        const result = await prisma.ordered.findMany()

        return result
    }

    async updateConfirmed(idOrdereed: string): Promise<void> {
        await prisma.ordered.update({
            where: {id: idOrdereed},
            data: {
                confirmed: true
            }
        })
    }

    async updateDone(idOrdered: string): Promise<void> {
        await prisma.ordered.update({
            where: {id: idOrdered},
            data: {
                finish: true
            }
        })
    }
}

export { OrderedRepository }