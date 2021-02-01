import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule} from '@nestjs/typeorm';
import { ConfigModule } from './modules/config/config.module';
import { UserModule } from './modules/user/user.module';
import configuration from './config/configuration';
import { UserController } from './modules/user/user.controller';
import { UserService } from './modules/user/user.service';
import { configService } from '../src/Services/config.service';

@Module({
  imports: [
    // ConfigModule.forRoot({isGlobal:true,
    // load :[configuration]
    // }),
    ConfigModule,
    UserModule,
    TypeOrmModule.forRoot(configService.getTypeORMConfig())
  ],
  controllers: [AppController,UserController],
  providers: [AppService,UserService],
})
export class AppModule {}
