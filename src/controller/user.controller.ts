import { Body, Controller, Post, Get, Delete, Param, Res, Patch } from "@nestjs/common";
import { UserService } from "../service/user.service";
// import { Response } from "@nestjs/common";
import { CreateUserDto } from "../dto/user.dto";
import { Response } from "express";
import { User } from "@prisma/client";

@Controller("users")
export class UserController {
    constructor(private service: UserService) { }
    @Get()
    async getAllUsers() {
        const result = await this.service.getAllUsers()
        return result
    }
    @Post("register")
    async createUser(@Body() data: CreateUserDto) {
        const result = await this.service.createItem(data)
        return result
    }
    @Delete("delete/:id")
    async deleteUser(@Param() params: { id: number },@Res() res: Response) {
        try {
            const result = await this.service.removeItem(Number(params.id))
            return result
        } catch (error) {
            console.log(res.status)
            if (error instanceof Error) {
                res.statusCode = 404 
                res.json({
                    status : 404,
                    message : error.message
                })
            }
        }
    }
    
    @Patch("update/:id")
    async updateUser(@Body() data : CreateUserDto, @Param("id") id : string) {
        console.log(data)
        const result = await this.service.updateItem(data,parseInt(id))
        return result
    }
}
