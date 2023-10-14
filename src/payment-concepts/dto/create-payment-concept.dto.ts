import {
  IsArray,
  IsInt,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';

export class CreatePaymentConceptDto {
  @IsString()
  @MinLength(1)
  name: string;

  @IsInt({ each: true })
  @IsArray()
  @IsOptional()
  regularPayments?: number[];
}
