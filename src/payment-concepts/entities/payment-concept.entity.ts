import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
  capitalizeFirstLetterName() {
    this.name = this.capitalizeFirstLetter(this.name);
  }

  capitalizeFirstLetter = (inputString: string): string => {
    inputString = inputString.trim();

    if (inputString.length === 0) {
      return inputString;
    }

    const firstLetter = inputString[0].toUpperCase();
    const restOfString = inputString.slice(1).toLowerCase();
    const result = firstLetter + restOfString;

    return result;
  };
}
