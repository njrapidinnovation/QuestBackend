import { Injectable } from '@nestjs/common';
import { isUUID } from 'class-validator';
import { userDto } from './user.dto';
import { MessageResponse, UserData } from './user.interface';
import { getUserBy } from './user.repository';
import {v4  } from 'uuid'

@Injectable()
export class UserService {

    async signUp({email,publicAddress}:userDto):Promise<MessageResponse>{
        try{
            const id = v4() ;
            var publicaddress= publicAddress;
            var role =1;
            var user:UserData ={
                id,
                email,
                publicaddress,
                role 
            }
            console.log(user);
            return 
        }
        catch{

        }

    }
}
