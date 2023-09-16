import { Module } from '@nestjs/common';

import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { StudentsModule } from 'src/students/students.module';
import { DocumentTypeModule } from 'src/document-type/document-type.module';
import { CommonModule } from 'src/common/common.module';

@Module({
  controllers: [SeedController],
  providers: [SeedService],
  imports: [StudentsModule, DocumentTypeModule, CommonModule],
})
export class SeedModule {}
