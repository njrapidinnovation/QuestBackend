import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { userNonceRepository, UserRepository } from './user.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports:[
    TypeOrmModule.forFeature([
      UserRepository,
      userNonceRepository
    ]),JwtModule.register({
    
      secret: "hello",
    
      signOptions:{ expiresIn:604800, },
   
    })],
  providers: [UserService],
  controllers: [UserController],
  exports:[UserService]
})
export class UserModule {}
