import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { Student } from './student.entity';

@Entity()
export class StudentPhoto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  url: string;

  @ManyToOne(() => Student, (student) => student.photo)
  student: Student;
}
