import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

 @Entity({name: 'StudentTable'})

class StudentEntity extends BaseEntity {

 @PrimaryGeneratedColumn()

  id: number;

  @Column()

  StudentName: string;

  @Column()

  StudentEmail: string;

}

 export default StudentEntity;