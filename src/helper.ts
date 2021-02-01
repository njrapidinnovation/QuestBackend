import { CreateDateColumn, EntitySchema, getRepository, ObjectType, UpdateDateColumn } from "typeorm";


export function getSingleBy<T = any>(table: ObjectType<T> | EntitySchema<T>):(filter: Partial<T>) => Promise<T>{
       console.log("IIIII");
    return async filter =>{
        const record = await getRepository(table).findOne({where:filter})
        return record
    }
}


export abstract class CreatedModified{
    @CreateDateColumn()
    CreatedAt :Date

    @UpdateDateColumn()
    UpdatedAt : Date
    
}