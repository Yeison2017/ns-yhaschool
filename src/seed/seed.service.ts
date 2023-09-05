import { Injectable } from '@nestjs/common';

import { StudentsService } from 'src/students/students.service';
import { DocumentTypeService } from 'src/document-type/document-type.service';
import { STUDENTS_SEED } from './data/students.seed';
import { DOCUMENT_TYPES_SEED } from './data/documentTypes.seed';

@Injectable()
export class SeedService {
  constructor(
    private readonly studentsService: StudentsService,
    private readonly documentTypes: DocumentTypeService,
  ) {}

  populateDB() {
    this.studentsService.fillStudentsWithSeedData(STUDENTS_SEED);
    this.documentTypes.filldocumentTypesWithSeedData(DOCUMENT_TYPES_SEED);
    return 'SEED executed';
  }
}
