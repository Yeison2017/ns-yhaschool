import { v4 as uuid } from 'uuid';

import { Student } from 'src/students/interfaces/student.interface';

export const STUDENTS_SEED: Student[] = [
  {
    id: uuid(),
    firstName: 'John',
    secondName: '',
    lastName: 'Doe',
    secondSurname: '',
    identification: '',
  },
  {
    id: uuid(),
    firstName: 'Ezequiel',
    secondName: '',
    lastName: 'Holgado',
    secondSurname: '',
    identification: '',
  },
  {
    id: uuid(),
    firstName: 'Nicolas',
    secondName: '',
    lastName: 'Reyes',
    secondSurname: '',
    identification: '',
  },
  {
    id: uuid(),
    firstName: 'Fatima',
    secondName: '',
    lastName: 'Muriel',
    secondSurname: '',
    identification: '',
  },
  {
    id: uuid(),
    firstName: 'Modesta',
    secondName: '',
    lastName: 'Navarro',
    secondSurname: '',
    identification: '',
  },
];
