import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNumber, IsString } from 'class-validator';
import { MessageResponse } from './user.interface';



export class userDto{
    @ApiProperty()
    @IsEmail()
    email:string

    @ApiProperty()
    @IsString()
    publicAddress:string

}

export class signUpResponse{
     @ApiProperty()
     @IsNumber()
     ResponseStatus:MessageResponse
    
    @ApiProperty()
    @IsString()
    Message:string
}