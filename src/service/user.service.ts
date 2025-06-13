import { Injectable, NotFoundException } from "@nestjs/common";
import PrismaModule from "../core/database/prisma.module";
import PrismaSevice from "../core/database/prisma.service";
import { User } from "@prisma/client";
import { NotFoundError } from "rxjs";


@Injectable()
export class UserService {
    constructor(private readonly prisma: PrismaSevice) {
        this.prisma = prisma
    }
    async getAllUsers() {
        return this.prisma.user.findMany()
    }
    async createItem(body: { username: string }): Promise<User> {
        const newUser: User = await this.prisma.user.create({ data: body })
        return newUser
    }
    async removeItem(id: number) {
        const exists = await this.prisma.user.findUnique({
            where: {
                id: id
            }
        })
        if (!exists) {
            throw new NotFoundException()
        }
        const result = await this.prisma.user.delete({
            where: {
                id: id
            }
        })
        return result
    }
    async updateItem(body: Partial<User>, id: number) {
        const exists = await this.prisma.user.findUnique({ where: { id } })
        if (!exists) throw new NotFoundException()
        return this.prisma.user.update({
            where : {id},
            data : body
        })
    }
}