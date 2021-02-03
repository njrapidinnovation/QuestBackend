import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNumber, IsString, isUUID } from 'class-validator';
import { isUuid } from 'uuidv4';
import { MessageResponse } from './user.interface';



export class userDto{

    @ApiProperty()
    @IsEmail()
    email:string

    @ApiProperty()
    @IsString()
    publicaddress:string

}

export class signUpResponse{
     @ApiProperty()
     @IsNumber()
     ResponseStatus:MessageResponse
    
    @ApiProperty()
    @IsString()
    Message:string
}

export class nonceDto{
    @ApiProperty()
    @IsString()
    publicaddress:string
}

export class signatureDto{
    @ApiProperty()
    @IsString()
    publicaddress:string

    @ApiProperty()
    @IsString()
    signature:string
}