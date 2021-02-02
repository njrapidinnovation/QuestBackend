import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import { nonceDto, signUpResponse, userDto } from './user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
   constructor(public readonly userService:UserService){}

   @Post('signUp')
   @HttpCode(HttpStatus.OK)
   @ApiOkResponse({type: signUpResponse, description: 'SIGN UP NEW USER'})
   async signUp(@Body() userDto:userDto){
      console.log("I was called")
      var res = await this.userService.signUp(userDto);
      if(res==400){
         return {
            ResponseStatus:res,
            Message:"This email is already in use"

         }
         
      }
      else{
         console.log(res);
         return{
            ResponseStatus:res,
            Message:"User registered Successfully"
         }
      }
    

   }

   @Post('updateNonce')
   @HttpCode(HttpStatus.OK)
   @ApiOkResponse({type:signUpResponse, description:"Update nonce"})
   async updateNonce(@Body() nonceDto:nonceDto){

      return await this.userService.updateNonce(nonceDto)
   }


}
