import { MiddlewareConsumer, Module } from "@nestjs/common";
import { UserController } from "../controller/user.controller";
import { UserService } from "../service/user.service";
import PrismaModule from "../core/database/prisma.module";
import { ConfigModule } from "@nestjs/config";
import { LoggerMiddleware } from "../middleware/logger";

@Module({
    imports: [PrismaModule, ConfigModule.forRoot()],
    controllers: [UserController],
    providers: [UserService]
})

export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('users');
  }
}