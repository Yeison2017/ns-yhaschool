import { v4 as uuid } from 'uuid';
import { faker } from '@faker-js/faker';

import { Student } from 'src/students/interfaces/student.interface';

export const createRandomStudent = (): Student => {
  return {
    firstName: faker.person.firstName(),
    secondName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    secondSurname: faker.person.lastName(),
    identification: faker.number.int({ max: 9999999 }).toString(),
  };
};

export const STUDENTS_SEED: Student[] = faker.helpers.multiple(
  createRandomStudent,
  {
    count: 5,
  },
);
