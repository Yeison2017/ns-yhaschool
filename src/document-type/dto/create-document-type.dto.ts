import { IsString, MinLength } from 'class-validator';

export class CreateDocumentTypeDto {
  @IsString()
  name: string;

  @IsString()
  @MinLength(2)
  abbreviation: string;
}
