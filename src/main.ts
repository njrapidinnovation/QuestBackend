import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {UserModule} from './modules/user/user.module'
import 'dotenv/config';

import { ConfigModule } from './modules/config/config.module';
import {configureSwagger} from './swagger'
import { ConfigService } from './Services/config.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.select(ConfigModule).get(ConfigService);
 
  // new UserController("Asss");

 if(['test','development'].includes(configService.getenvConfig().NODE_ENV)){
   configureSwagger(app,configService)
 }

  app.enableCors()
  let env = configService.getenvConfig();
  console.log(env.HTTP_PORT);
  await app.listen(env.HTTP_PORT);
}


bootstrap();
