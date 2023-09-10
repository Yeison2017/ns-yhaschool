import { IsString } from 'class-validator';

export class CreateStudentDto {
  @IsString()
  firstName: string;

  @IsString()
  secondName: string;

  @IsString()
  lastName: string;

  @IsString()
  secondSurname: string;

  @IsString()
  identification: string;
}
