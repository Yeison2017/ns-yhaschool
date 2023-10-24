import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { StudentsController } from './students.controller';
import { StudentsService } from './students.service';
import { Student, StudentPhoto } from './entities';

@Module({
  controllers: [StudentsController],
  providers: [StudentsService],
  exports: [StudentsService],
  imports: [TypeOrmModule.forFeature([Student, StudentPhoto])],
})
export class StudentsModule {}
