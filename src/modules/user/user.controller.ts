import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import { signUpResponse, userDto } from './user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
   constructor(public readonly userService:UserService){}

   @Post('signUp')
   @HttpCode(HttpStatus.OK)
   @ApiOkResponse({type: signUpResponse, description: 'SIGN UP NEW USER'})
   async signUp(@Body() userDto:userDto){
      console.log("I was called")

    return await this.userService.signUp(userDto)

   }


}
