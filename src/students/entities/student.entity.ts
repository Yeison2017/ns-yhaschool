import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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

  @Column('text')
  identification: string;
}
