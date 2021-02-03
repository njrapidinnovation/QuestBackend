import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import { nonceDto, signatureDto, signUpResponse, userDto } from './user.dto';
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

<<<<<<< HEAD
   @Get('GetNonce/:publicaddress')
   @HttpCode(HttpStatus.OK)
   @ApiOkResponse()
async getnonce(@Param('publicaddress') publicaddress:string){
// var nonce:nonceDto = "0x4355663773eeee"
   return await this.userService.getNonce(publicaddress)
}
=======
   @Post('getNonce')
   @HttpCode(HttpStatus.OK)
   @ApiOkResponse({description:"Get Nonce By Public Address"})
   async getNonce(@Body() nonceDto:nonceDto){

      return await this.userService.getNonce(nonceDto);
   }

   @Post('getAuth')
   @HttpCode(HttpStatus.OK)
   @ApiOkResponse({description:"Get JWT token by Address and Signature"})
   async updateNone(@Body() signatureDto:signatureDto){

      return await this.userService.auth(signatureDto);
   }

>>>>>>> 06b37d8735382aedad2b1d4624403dc3ed07d41c

}
