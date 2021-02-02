import { BadRequestException, Injectable } from '@nestjs/common';
import { nonceDto, userDto } from './user.dto';
import { IuserNonce, MessageResponse, Role, UserData } from './user.interface';
import { getUserBy, userNonceRepository, UserRepository } from './user.repository';
import {v4  } from 'uuid'
import { promises } from 'dns';

@Injectable()
export class UserService {

    constructor(
        public readonly userRepository:UserRepository,
        public readonly userNonceRepository:userNonceRepository
    ){}

    async signUp({email,publicAddress}:userDto):Promise<MessageResponse>{
        try{
            const id = v4();
            var publicaddress= publicAddress;
            var role = Role.General;

            const list = await getUserBy({email});
            const publiclist = await getUserBy({publicaddress});
            if(!list && !publiclist){     
                var user:UserData ={
                    id,
                    email,
                    publicaddress,
                    role
                }
           await this.userRepository.insert(user);
           var usernonce:IuserNonce ={
               id : v4(),
               nonce: (Math.floor(Math.random()*10000)).toString(),
               publicaddress

           }

           await this.userNonceRepository.insert(usernonce);
           
           return MessageResponse.Successfull;

            }
            else{
                if(list){
                    var responsType= 401
                }else if(publiclist){
                responsType=402
                }
                switch(responsType){
                    case 401:
                     throw new BadRequestException("Email already in use,please login to continue");
                     break;
                     case 402:
                     throw new BadRequestException("Publickey already in use,please login to continue")
                     break;
                     default:
                    throw new BadRequestException("Something went wrong, please try again")
                    break;
                }
                 
            }
        }
        catch(err){

throw new BadRequestException(err.message);
        }

    }

    // Update Nonce for particular address

    async updateNonce({publicaddress}:nonceDto):Promise<MessageResponse>{
        const list = await getUserBy({publicaddress});
        if(list){
            const data ={
                id:v4(),
                nonce: (Math.floor(Math.random()*10000)).toString(),
                publicaddress
            }
           await this.userNonceRepository.insert(data)
        }
        return MessageResponse.Successfull

    }
}




