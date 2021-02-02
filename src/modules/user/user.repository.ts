import { getSingleBy } from 'src/helper';
import {EntityRepository,Repository, getConnection} from 'typeorm';
import { userEntity, userNonce } from './user.entity';
// import {} from 


export const getUserBy = getSingleBy(userEntity)

@EntityRepository(userEntity)
export class UserRepository extends Repository<userEntity>{}

@EntityRepository(userNonce)
export class userNonceRepository extends Repository<userNonce>{}
