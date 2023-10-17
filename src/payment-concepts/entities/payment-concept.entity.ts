import { Helpers } from 'src/common/utils/helpers';
import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class PaymentConcept {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text', {
    unique: true,
  })
  name: string;

  @Column('int', {
    array: true,
    nullable: true,
  })
  regularPayments: number[];

  @BeforeInsert()
  capitalizeFirstLetterNameInsert() {
    this.name = Helpers.capitalizeFirstLetter(this.name);
  }

  @BeforeUpdate()
  capitalizeFirstLetterNameUpdate() {
    this.name = Helpers.capitalizeFirstLetter(this.name);
  }
}
