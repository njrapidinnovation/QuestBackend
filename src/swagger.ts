import { INestApplication } from "@nestjs/common";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { UserModule } from "./modules/user/user.module";
import { ConfigService } from "./Services/config.service";
// import C from "./Services/config.service";


export function configureSwagger(app:INestApplication, configService:ConfigService){
    const config = new DocumentBuilder()
    .setTitle('Quest_Backend')
    .setDescription(`Quest Backend APIs`)
    .setVersion(`V.1.1`)
    .addTag('QST')
    .build()

    const document = SwaggerModule.createDocument(app,config,{
        include:[
            UserModule
        ]
    });
    SwaggerModule.setup('api',app,document); 
}