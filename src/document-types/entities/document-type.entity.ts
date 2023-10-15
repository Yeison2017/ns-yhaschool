import { Helpers } from 'src/common/utils/helpers';
import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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

  @BeforeInsert()
  capitaliceFirstLetterName() {
    this.name = Helpers.capitalizeFirstLetter(this.name);
  }

  @BeforeInsert()
  toUpperCaseAbbreviation() {
    this.abbreviation = this.abbreviation.trim().toUpperCase();
  }
}
