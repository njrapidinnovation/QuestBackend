import { CreatedModified } from "src/helper";
import { Column, Entity, PrimaryColumn } from "typeorm";
import { UserData } from "./user.interface";



@Entity()
export class userEntity extends CreatedModified implements UserData{
@Column({nullable: false})
id:string

@PrimaryColumn()
email:string

@Column()
publicaddress:string

@Column()
role:number

@Column({default:true})
isActive:boolean
}