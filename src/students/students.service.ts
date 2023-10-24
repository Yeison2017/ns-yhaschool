import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateStudentDto, UpdateStudentDto } from './dto';
import { Student } from './entities';
import { Helpers } from 'src/common/utils/helpers';

@Injectable()
export class StudentsService {
  constructor(
    @InjectRepository(Student)
    private readonly studentRepository: Repository<Student>,
  ) {}

  private students: Student[] = [];

  async create(createStudenDto: CreateStudentDto) {
    try {
      const studentConcept = this.studentRepository.create(createStudenDto);
      await this.studentRepository.save(studentConcept);
      return studentConcept;
    } catch (error) {
      Helpers.handleDBExceptions(error);
    }
  }

  findAll() {
    return this.students;
  }

  findOneById(id: string) {
    const student = this.students.find((student) => student.id === id);
    if (!student)
      throw new NotFoundException(`Student with id '${id}' not found`);
    return student;
  }

  update(id: string, updateStudentDto: UpdateStudentDto) {
    // let studentDB = this.findOneById(id);
    // if (updateStudentDto.id && updateStudentDto.id !== id)
    //   throw new BadRequestException(`Car id is not valid inside body`);
    // this.students = this.students.map((student) => {
    //   if (student.id === id) {
    //     studentDB = {
    //       ...studentDB,
    //       ...updateStudentDto,
    //       id,
    //     };
    //   }
    //   return student;
    // });
    // return studentDB;
  }

  delete(id: string) {
    const student = this.findOneById(id);
    this.students = this.students.filter((student) => student.id !== id);
  }

  fillStudentsWithSeedData(students: Student[]) {
    this.students = students;
  }
}
