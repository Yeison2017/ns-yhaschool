import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { StudentsModule } from 'src/students/students.module';
import { DocumentTypesModule } from 'src/document-types/document-types.module';

@Module({
  controllers: [SeedController],
  providers: [SeedService],
  imports: [StudentsModule, DocumentTypesModule],
})
export class SeedModule {}
