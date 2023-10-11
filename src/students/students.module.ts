import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { StudentsController } from './students.controller';
import { StudentsService } from './students.service';
import { Student } from './entities/student.entity';

@Module({
  controllers: [StudentsController],
  providers: [StudentsService],
  exports: [StudentsService],
  imports: [TypeOrmModule.forFeature([Student])],
})
export class StudentsModule {}
