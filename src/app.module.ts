import { join } from 'path';
import { Module } from '@nestjs/common';
import { StudentsModule } from './students/students.module';
import { DocumentTypeModule } from './document-type/document-type.module';
import { SeedModule } from './seed/seed.module';
import { ServeStaticModule } from '@nestjs/serve-static';

@Module({
  imports: [
    StudentsModule,
    DocumentTypeModule,
    SeedModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
