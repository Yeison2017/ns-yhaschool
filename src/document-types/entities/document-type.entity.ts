import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class DocumentType {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text', {
    unique: true,
  })
  name: string;

  @Column('text', {
    unique: true,
  })
  abbreviation: string;
}
