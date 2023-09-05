import { v4 as uuid } from 'uuid';

import { Student } from 'src/students/interfaces/student.interface';

export const STUDENTS_SEED: Student[] = [
  {
    id: uuid(),
    name: 'John',
    lastName: 'Doe',
  },
  {
    id: uuid(),
    name: 'Ezequiel',
    lastName: 'Holgado',
  },
  {
    id: uuid(),
    name: 'Nicolas',
    lastName: 'Reyes',
  },
  {
    id: uuid(),
    name: 'Fatima',
    lastName: 'Muriel',
  },
  {
    id: uuid(),
    name: 'Modesta',
    lastName: 'Navarro',
  },
];
