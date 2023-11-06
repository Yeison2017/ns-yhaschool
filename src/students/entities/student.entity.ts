import {
  Column,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { StudentPhoto } from './student-photo.entity';

@Entity()
export class Student {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text')
  firstName: string;

  @Column({
    type: 'text',
    nullable: true,
  })
  secondName: string;

  @Column('text')
  lastName: string;

  @Column({
    type: 'text',
    nullable: true,
  })
  secondLastName: string;

  @Column('text', {
    nullable: true,
  })
  identification: string;

  @Column('date', {
    nullable: true,
  })
  birthdate: Date;

  @Column('text', {
    nullable: true,
  })
  phone1: string;

  @Column('text', {
    nullable: true,
  })
  phone2: string;

  @Column('text', {
    nullable: true,
  })
  email: string;

  @Column('boolean')
  isEnabled: boolean;

  @Column('date', {
    nullable: true,
  })
  readonly creationDate: Date;

  @OneToMany(() => StudentPhoto, (studentPhoto) => studentPhoto.student, {
    cascade: true,
    eager: true,
  })
  photos?: StudentPhoto[];
}
