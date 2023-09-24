import { Module } from '@nestjs/common';
import { DocumentTypeService } from './document-type.service';
import { DocumentTypeController } from './document-type.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  DocumentType,
  DocumentTypeSchema,
  // DocumentTypeSchema,
} from './entities/document-type.entity';

@Module({
  controllers: [DocumentTypeController],
  providers: [DocumentTypeService],
  exports: [MongooseModule, DocumentTypeService],
  imports: [
    MongooseModule.forFeature([
      {
        name: DocumentType.name,
        schema: DocumentTypeSchema,
      },
    ]),
  ],
})
export class DocumentTypeModule {}
