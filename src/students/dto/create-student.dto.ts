import {
  IsArray,
  IsBoolean,
  IsDate,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';

export class CreateStudentDto {
  @IsString()
  @MinLength(1)
  readonly firstName: string;

  @IsString()
  @IsOptional()
  readonly secondName: string;

  @IsString()
  @MinLength(1)
  readonly lastName: string;

  @IsString()
  @IsOptional()
  readonly secondLastName: string;

  @IsString()
  @IsOptional()
  readonly identification: string;

  @IsDate()
  @IsOptional()
  readonly birthdate: Date;

  @IsString()
  @IsOptional()
  readonly phone1: string;

  @IsString()
  @IsOptional()
  readonly phone2: string;

  @IsString()
  @IsOptional()
  readonly email: string;

  @IsBoolean()
  readonly isEnabled: boolean;

  @IsDate()
  readonly creationDate: Date;

  @IsString({ each: true })
  @IsArray()
  @IsOptional()
  images?: string[];
}
