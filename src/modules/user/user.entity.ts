import { CreatedModified } from "src/helper";
import { Column, Entity, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { ForeignKeyMetadata } from "typeorm/metadata/ForeignKeyMetadata";
import { UserData,IuserNonce } from "./user.interface";



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

// This the entity for the storing the nonce

@Entity()
export class userNonce extends CreatedModified implements IuserNonce {
    @PrimaryGeneratedColumn()
    id:string

    @Column()
    nonce:string

    @OneToMany(() => userEntity,(user:userEntity)=> user.publicaddress)
    publicaddress:string

}

