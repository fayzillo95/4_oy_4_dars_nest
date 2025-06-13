import { NestFactory } from "@nestjs/core";
import { AppModule } from "./modules/app.modules";
import {env} from "process"
import { ValidationPipe } from "@nestjs/common";

async function initApp() {
    const app = await NestFactory.create(AppModule)
    let PORT : number = env.PORT ? Number(env.PORT) : 15975 
    let HOST : string = env.HOST ? env.HOST : "localhost"
    app.useGlobalPipes(
        new ValidationPipe({
            whitelist : true,
            transform :true,
            forbidNonWhitelisted:true
        })
    )
    await app.listen(PORT);
    console.log(`Server is running: http://${HOST}:${PORT}`);
}

initApp().catch((reason)=>{
    console.log(reason)
})