import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, isValidObjectId } from 'mongoose';

import { Student } from './entities/students.entity';
import { CreateStudentDto, UpdateStudentDto } from './dto';

@Injectable()
export class StudentsService {
  constructor(
    @InjectModel(Student.name)
    private readonly studentModel: Model<Student>,
  ) {}

  private students: Student[] = [];

  findAll() {
    return this.students;
  }

  async findOne(term: string) {
    let student = Student;

    // if (!isNaN(+term)) {
    //   student = await this.studentModel.findOne({ identification: term });
    // }

    if (isValidObjectId(term)) {
      student = await this.studentModel.findById(term);
    }

    if (!student) {
      throw new NotFoundException(`Student with id "${term}" not found`);
    }

    return student;
  }

  async create(createStudenDto: CreateStudentDto) {
    const { firstName, secondName, lastName, secondSurname } = createStudenDto;

    createStudenDto.firstName = firstName.toLocaleLowerCase();
    createStudenDto.secondName = secondName.toLocaleLowerCase();
    createStudenDto.lastName = lastName.toLocaleLowerCase();
    createStudenDto.secondSurname = secondSurname.toLocaleLowerCase();

    try {
      const student = await this.studentModel.create(createStudenDto);
      return student;
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException(
        `Can't create student - Check server logs`,
      );
    }
  }

  async update(term: string, updateStudentDto: UpdateStudentDto) {
    if (updateStudentDto.firstName) {
      updateStudentDto.firstName =
        updateStudentDto.firstName.toLocaleLowerCase();
    }

    const updateStudent = await this.studentModel.findByIdAndUpdate(
      term,
      updateStudentDto,
      { new: true },
    );

    return updateStudent;
  }

  async remove(id: string) {
    const { deletedCount } = await this.studentModel.deleteOne({ _id: id });
    if (deletedCount === 0) {
      throw new BadRequestException(`Student with id "${id}" not found`);
    }

    return;
  }

  fillStudentsWithSeedData(students: Student[]) {
    this.students = students;
  }
}
