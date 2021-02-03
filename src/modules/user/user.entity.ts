import { CreatedModified } from "src/helper";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { ForeignKeyMetadata } from "typeorm/metadata/ForeignKeyMetadata";
import { UserData,IuserNonce } from "./user.interface";



@Entity()
export class userEntity extends CreatedModified implements UserData{
@Column({nullable: false})
id:string

@Column()
email:string

// @OneToMany(() => userNonce,(nonce:userNonce)=> nonce.nonce)
@PrimaryColumn()
publicaddress:string

@Column()
role:number

@Column({default:true})
isActive:boolean

// @OneToMany(() => userNonce,(nonce:userNonce)=> nonce.publicaddress)
// usernonce:string


}

// This the entity for the storing the nonce

@Entity()
export class userNonce extends CreatedModified implements IuserNonce {
    @PrimaryGeneratedColumn()
    id:string

    @Column()
    nonce:string
    
    @ManyToOne(() => userEntity,(user:userEntity)=> user.publicaddress)
    @JoinColumn()
    publicaddress:string

}

