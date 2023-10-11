import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';

import { DocumentType } from './entities/document-type.entity';

import { CreateDocumentTypeDto } from './dto/create-document-type.dto';
import { UpdateDocumentTypeDto } from './dto/update-document-type.dto';

@Injectable()
export class DocumentTypeService {
  private documentTypes: DocumentType[] = [
    // {
    //   id: uuid(),
    //   name: 'Cédula de ciudadanía',
    //   createAt: new Date().getTime(),
    // },
  ];

  create(createDocumentTypeDto: CreateDocumentTypeDto) {
    // const { name, abbreviation  } = CreateDocumentTypeDto;
    // const documentType: DocumentType = {
    //   id: uuid(),
    //   name: name.toLocaleLowerCase(),
    //   abbreviation: new Date().getTime(),
    // };
    // this.documentTypes.push(documentType);
    // return documentType;
  }

  findAll() {
    return this.documentTypes;
  }

  findOne(id: string) {
    const documentType = this.documentTypes.find(
      (documentType) => documentType.id === id,
    );
    if (!documentType) {
      throw new NotFoundException(`DocumentType with id "${id}" not found`);
    }

    return documentType;
  }

  update(id: string, updateDocumentTypeDto: UpdateDocumentTypeDto) {
    // let documentTypeDB = this.findOne(id);
    // this.documentTypes = this.documentTypes.map((documentType) => {
    //   if (documentType.id === id) {
    //     documentType.updateAt = new Date().getTime();
    //     documentType = { ...documentType, ...updateDocumentTypeDto };
    //     return documentType;
    //   }
    //   return documentType;
    // });
    // return documentTypeDB;
  }

  remove(id: string) {
    this.documentTypes = this.documentTypes.filter(
      (documentType) => documentType.id !== id,
    );
  }

  filldocumentTypesWithSeedData(documentType: DocumentType[]) {
    this.documentTypes = documentType;
  }
}
