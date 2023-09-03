import { Module } from '@nestjs/common';
import { StudentsModule } from './students/students.module';
import { DocumentTypeModule } from './document-type/document-type.module';
import { SeedModule } from './seed/seed.module';

@Module({
  imports: [StudentsModule, DocumentTypeModule, SeedModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
