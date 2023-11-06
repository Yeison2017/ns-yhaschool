import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';

import { CreateStudentDto, UpdateStudentDto } from './dto';
import { Student, StudentPhoto } from './entities';
import { Helpers } from 'src/common/utils/helpers';
import { PaginationDto } from 'src/common/dtos/pagination.dto';

@Injectable()
export class StudentsService {
  constructor(
    @InjectRepository(Student)
    private readonly studentRepository: Repository<Student>,

    @InjectRepository(StudentPhoto)
    private readonly studentPhoneRepository: Repository<StudentPhoto>,

    private readonly dataSource: DataSource,
  ) {}

  private students: Student[] = [];

  async create(createStudenDto: CreateStudentDto) {
    try {
      const { photos = [], ...studentDetails } = createStudenDto;
      const student = this.studentRepository.create({
        ...studentDetails,
        photos: photos.map((phone) =>
          this.studentPhoneRepository.create({ url: phone }),
        ),
      });
      await this.studentRepository.save(student);
      return { ...student, photos };
    } catch (error) {
      Helpers.handleDBExceptions(error);
    }
  }

  async findAll(paginationDto: PaginationDto) {
    const { limit = 10, offset = 0 } = paginationDto;
    const students = await this.studentRepository.find({
      take: limit,
      skip: offset,
      relations: {
        photos: true,
      },
    });

    return students.map((student) => ({
      ...student,
      photos: student.photos.map((photo) => photo.url),
    }));
  }

  async findOne(id: string) {
    const student = await this.studentRepository.findOneBy({ id });

    if (!student) {
      throw new NotFoundException(`Student with id '${id}' not found`);
    }

    return student;
  }

  async findOnePlain(term: string) {
    const { photos = [], ...rest } = await this.findOne(term);
    return {
      ...rest,
      photos: photos.map((photo) => photo.url),
    };
  }

  async update(id: string, updateStudentDto: UpdateStudentDto) {
    const { photos, ...toUpdate } = updateStudentDto;

    const student = await this.studentRepository.preload({
      id,
      ...toUpdate,
    });

    if (!student)
      throw new NotFoundException(`Student with id: ${id} not found`);

    // Create query runner
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      if (photos) {
        await queryRunner.manager.delete(StudentPhoto, { student: { id } });

        student.photos = photos.map((photo) =>
          this.studentPhoneRepository.create({ url: photo }),
        );
      } else {
      }

      await queryRunner.manager.save(student);

      await queryRunner.commitTransaction();
      await queryRunner.release();

      // await this.studentRepository.save(student);
      return this.findOnePlain(id);
    } catch (error) {
      await queryRunner.rollbackTransaction();
      await queryRunner.release();

      Helpers.handleDBExceptions(error);
    }
  }

  async remove(id: string) {
    const student = await this.findOne(id);
    await this.studentRepository.remove(student);
  }

  async deleteAllStudents() {
    const query = this.studentRepository.createQueryBuilder('student');

    try {
      return await query.delete().where({}).execute();
    } catch (error) {
      Helpers.handleDBExceptions(error);
    }
  }

  fillStudentsWithSeedData(students: Student[]) {
    this.students = students;
  }
}
