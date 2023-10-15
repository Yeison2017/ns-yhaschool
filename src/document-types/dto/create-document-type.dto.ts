import { IsString, MinLength } from 'class-validator';

export class CreateDocumentTypeDto {
  @IsString()
  @MinLength(1)
  name: string;

  @IsString()
  @MinLength(1)
  abbreviation: string;
}
