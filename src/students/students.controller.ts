import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  ParseUUIDPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { StudentsService } from './students.service';

@Controller('students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  @Get()
  getAllStudents() {
    return this.studentsService.findAll();
  }

  @Get(':id')
  getStudentById(@Param('id', ParseUUIDPipe) id: string) {
    return this.studentsService.findOneById(id);
  }

  @Post()
  createStudent(@Body() body: any) {
    return body;
  }

  @Patch(':id')
  updateStudent(@Body() body: any) {
    return body;
  }

  @Delete(':id')
  deleteStudent(@Param('id', ParseIntPipe) id: number) {
    return {
      method: 'delete',
      id,
    };
  }
}
