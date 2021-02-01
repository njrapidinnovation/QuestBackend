import { getSingleBy } from 'src/helper';
import {EntityRepository,Repository, getConnection} from 'typeorm';
import { userEntity } from './user.entity';
// import {} from 


export const getUserBy = getSingleBy(userEntity)