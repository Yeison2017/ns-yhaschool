import { Injectable } from '@nestjs/common';

import { StudentsService } from 'src/students/students.service';
import { DocumentTypesService } from 'src/document-types/document-types.service';
import { STUDENTS_SEED } from './data/students.seed';
import { DOCUMENT_TYPES_SEED } from './data/documentTypes.seed';

@Injectable()
export class SeedService {
  constructor(private readonly studentsService: StudentsService) {}

  async runSeed() {
    await this.insertNewStudents();
    return 'SEED EXECUTED';
  }

  private async insertNewStudents() {
    await this.studentsService.deleteAllStudents();

    const students = STUDENTS_SEED;

    const insertPromises = [];
    students.forEach((student) => {
      insertPromises.push(this.studentsService.create(student));
    });
    await Promise.all(insertPromises);

    return true;
  }
}
