import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { STUDENTS_SEED } from './data/students.seed';
import { DOCUMENT_TYPES_SEED } from './data/documentTypes.seed';
import { Student } from 'src/students/entities/students.entity';
import { DocumentType } from 'src/document-type/entities/document-type.entity';

@Injectable()
export class SeedService {
  constructor(
    @InjectModel(Student.name)
    private readonly studentsModel: Model<Student>,

    @InjectModel(DocumentType.name)
    private readonly documentTypeModel: Model<DocumentType>,
  ) {}

  async executeSeed() {
    await this.studentsModel.deleteMany({});
    await this.documentTypeModel.deleteMany({});

    await this.studentsModel.insertMany(STUDENTS_SEED);
    await this.documentTypeModel.insertMany(DOCUMENT_TYPES_SEED);
    return 'Seed Executed';
  }
}
