import { join } from 'path';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static';

import { StudentsModule } from './students/students.module';
import { DocumentTypeModule } from './document-type/document-type.module';
import { SeedModule } from './seed/seed.module';
import { CommonModule } from './common/common.module';

@Module({
  imports: [
    StudentsModule,
    DocumentTypeModule,
    SeedModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
    MongooseModule.forRoot('mongodb://localhost:27017/nest-yhaSchool'),
    CommonModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
