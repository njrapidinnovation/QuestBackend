import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule} from '@nestjs/typeorm';
import { ConfigModule } from './modules/config/config.module';
import { UserModule } from './modules/user/user.module';
// import configuration from './config/configuration';
import { UserController } from './modules/user/user.controller';
import { UserService } from './modules/user/user.service';
import { ConfigService } from './Services/config.service';
// import ConfigService from './Services/config.service';
// import { UserRepository } from './modules/user/user.repository';


@Module({
  imports: [
    // ConfigModule.forRoot({isGlobal:true,
    // load :[configuration]
    // }),
    ConfigModule,
    UserModule,
    TypeOrmModule.forRootAsync({
      // imports: [SharedModule],
      useFactory: (configService: ConfigService) => configService.getTypeORMConfig(),
      inject: [ConfigService],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
  // exports:[UserService]
})
export class AppModule {}
