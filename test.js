import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()
async function getUsers(params) {
    const users = await prisma.user.findMany()
    console.log(users)
}

getUsers()