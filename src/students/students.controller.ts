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
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { StudentsService } from './students.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';

@Controller('students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  @Get()
  getAllStudents() {
    return this.studentsService.findAll();
  }

  @Get(':term')
  findOne(@Param('term') term: string) {
    return this.studentsService.findOne(term);
  }

  @Post()
  createStudent(@Body() createStudentDto: CreateStudentDto) {
    return this.studentsService.create(createStudentDto);
  }

  @Patch(':term')
  update(
    @Param('term') term: string,
    @Body() updateStudentDto: UpdateStudentDto,
  ) {
    updateStudentDto.firstName;

    return this.studentsService.update(term, updateStudentDto);
  }

  @Delete(':id')
  deleteStudent(@Param('id') id: string) {
    return this.studentsService.remove(id);
  }
}
