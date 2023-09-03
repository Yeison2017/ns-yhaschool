// import { PartialType } from '@nestjs/mapped-types';
// import { CreateDocumentTypeDto } from './create-document-type.dto';

import { IsString, MinLength } from 'class-validator';

// export class UpdateDocumentTypeDto extends PartialType(CreateDocumentTypeDto) {}

export class UpdateDocumentTypeDto {
  @IsString()
  @MinLength(1)
  name: string;
}
