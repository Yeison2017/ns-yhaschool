import { faker } from '@faker-js/faker';

import { Student } from 'src/students/interfaces/student.interface';

const generateRandomStudent = (): Student => {
  const student: Student = {
    firstName: faker.person.firstName(),
    secondName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    secondLastName: faker.person.lastName(),
    identification: faker.string.numeric(10),
    birthdate: faker.date.birthdate(),
    phone1: faker.helpers
      .rangeToNumber({ min: 3000000000, max: 3029999999 })
      .toString(),
    phone2: faker.helpers
      .rangeToNumber({ min: 3000000000, max: 3029999999 })
      .toString(),
    email: faker.internet.email(),
    isEnabled: faker.datatype.boolean(),
    creationDate: faker.date.past(),
    photos: [faker.image.url(), faker.image.url(), faker.image.url()],
  };

  return student;
};

const numberOfStudents: number = 10;
export const STUDENTS_SEED: Student[] = Array.from(
  { length: numberOfStudents },
  generateRandomStudent,
);
