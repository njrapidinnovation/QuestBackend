import { BadRequestException, Injectable } from '@nestjs/common';
import { nonceDto, signatureDto, userDto } from './user.dto';
import { IuserNonce, MessageResponse, Role, UserData } from './user.interface';
import { getUserBy, getUserNonceBy, userNonceRepository, UserRepository } from './user.repository';
import {v4  } from 'uuid';
import { recoverPersonalSignature } from 'eth-sig-util';
import { bufferToHex } from 'ethereumjs-util';
import {JwtService} from '@nestjs/jwt';
import { promises } from 'dns';
import { userNonce } from './user.entity';

@Injectable()
export class UserService {

    constructor(
        public readonly userRepository:UserRepository,
        public readonly userNonceRepository:userNonceRepository,
        public readonly jwtService:JwtService
    ){}

    async signUp({email,publicaddress}:userDto):Promise<any>{
        try{
            const id = v4();
            var publicaddress= publicaddress;
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
           
           return {
              publicaddress:usernonce.publicaddress,
              nonce:usernonce.nonce
           };

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
        const list = await getUserNonceBy({publicaddress});
        if(list){
            let nonce =  (Math.floor(Math.random()*10000)).toString()
            await this.userNonceRepository.update(list,{nonce:nonce})
        }
        return MessageResponse.Successfull;

    }
    
    //Get Nonce for particular address
    async getNonce(publicaddress:string):Promise<any>{
        let user = await getUserBy({publicaddress});
        if(user && user.isActive == true)
        return{
          publicaddress:publicaddress,
          nonce:(await getUserNonceBy({publicaddress})).nonce
        } 
        else
        return [];
	}

	//Get JWT token when nonce is signed
    async auth({publicaddress,signature}:signatureDto):Promise<any>{
	let token:string;
	let user = await getUserNonceBy({publicaddress});
    console.log(user);
	if(user){
		const msg = `I am signing my one-time nonce: ${user.nonce}`;
		const msgBufferHex = bufferToHex(Buffer.from(msg, 'utf8'));
		const address = recoverPersonalSignature({
			data: msgBufferHex,
			sig: signature,
		});
		console.log(address);
		if (address.toLowerCase() === publicaddress.toLowerCase()) {
		} else {
			return null;
        }
        let new_nonce = (Math.floor(Math.random()*10000)).toString();
        let updated_user = await this.userNonceRepository.update(user,{nonce:new_nonce})
        console.log(updated_user);
		token = this.jwtService.sign(
			{
				payload: {
					id: user.id,
					publicaddress,
				},
			}
			
		)
	console.log(token)
	}
	let obj = {"accessToken":token};
	return obj;				
 }
}




