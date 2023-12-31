import { Injectable, NotFoundException } from '@nestjs/common';
import { Student } from './interfaces/student.interface';
import { v4 as uuid } from 'uuid';

@Injectable()
export class StudentsService {
  private students: Student[] = [
    {
      id: uuid(),
      name: 'Luis',
      lastName: 'Perez',
    },
    {
      id: uuid(),
      name: 'Maria',
      lastName: 'Gonzales',
    },
    {
      id: uuid(),
      name: 'Rosa',
      lastName: 'Fernandez',
    },
  ];

  findAll() {
    return this.students;
  }

  findOneById(id: string) {
    const student = this.students.find((student) => student.id === id);
    if (!student)
      throw new NotFoundException(`Student with id '${id}' not found`);
    return student;
  }
}
