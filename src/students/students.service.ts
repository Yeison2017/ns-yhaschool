import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { v4 as uuid } from 'uuid';

import { Student } from './interfaces/student.interface';
import { CreateStudentDto, UpdateStudentDto } from './dto';

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

  create(createStudenDto: CreateStudentDto) {
    const student: Student = {
      id: uuid(),
      ...createStudenDto,
    };

    this.students.push(student);

    return student;
  }

  update(id: string, updateStudentDto: UpdateStudentDto) {
    let studentDB = this.findOneById(id);

    if (updateStudentDto.id && updateStudentDto.id !== id)
      throw new BadRequestException(`Car id is not valid inside body`);

    this.students = this.students.map((student) => {
      if (student.id === id) {
        studentDB = {
          ...studentDB,
          ...updateStudentDto,
          id,
        };
      }

      return student;
    });
    return studentDB;
  }

  delete(id: string) {
    const student = this.findOneById(id);
    this.students = this.students.filter((student) => student.id !== id);
  }
}
