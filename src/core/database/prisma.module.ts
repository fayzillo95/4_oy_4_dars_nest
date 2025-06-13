import PrismaSevice from "./prisma.service";
import { Global,Module } from "@nestjs/common";

@Global()
@Module({
    providers:[PrismaSevice],
    exports:[PrismaSevice]
})

export default class PrismaModule{}