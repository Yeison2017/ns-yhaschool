import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { InjectModel } from '@nestjs/mongoose';
import { Model, isValidObjectId } from 'mongoose';

import { DocumentType } from './entities/document-type.entity';
import { CreateDocumentTypeDto } from './dto/create-document-type.dto';
import { UpdateDocumentTypeDto } from './dto/update-document-type.dto';

@Injectable()
export class DocumentTypeService {
  constructor(
    @InjectModel(DocumentType.name)
    private readonly documentTypeModel: Model<DocumentType>,
  ) {}

  private documentTypes: DocumentType[] = [
    // {
    //   id: uuid(),
    //   name: 'Cédula de ciudadanía',
    //   createAt: new Date().getTime(),
    // },
  ];

  async create(createDocumentTypeDto: CreateDocumentTypeDto) {
    const { name, abbreviation } = createDocumentTypeDto;

    createDocumentTypeDto.name = name.toLocaleLowerCase();
    createDocumentTypeDto.abbreviation = abbreviation.toLocaleLowerCase();

    try {
      const documentType = await this.documentTypeModel.create(
        createDocumentTypeDto,
      );
      return documentType;
    } catch (error) {
      this.handleException(error);
    }
  }

  findAll() {
    return this.documentTypes;
  }

  async findOne(term: string) {
    let documentType = DocumentType;

    if (isValidObjectId(term)) {
      documentType = await this.documentTypeModel.findById(term);
    }

    if (!documentType) {
      throw new NotFoundException(`DocumentType with id "${term}" not found`);
    }

    return documentType;
  }

  async update(term: string, updateDocumentTypeDto: UpdateDocumentTypeDto) {
    if (updateDocumentTypeDto.name) {
      updateDocumentTypeDto.name =
        updateDocumentTypeDto.name.toLocaleLowerCase();
    }

    try {
      const updateDocumentType = await this.documentTypeModel.findByIdAndUpdate(
        term,
        updateDocumentTypeDto,
        { new: true },
      );

      return updateDocumentType;
    } catch (error) {
      this.handleException(error);
    }
  }

  async remove(id: string) {
    await this.findOne(id);
    await this.documentTypeModel.findByIdAndDelete(id);
  }

  filldocumentTypesWithSeedData(documentType: DocumentType[]) {
    this.documentTypes = documentType;
  }

  private handleException(error: any) {
    if (error.code === 11000) {
      throw new BadRequestException(
        `DocumentType exists in db ${JSON.stringify(error.keyValue)}`,
      );
    }
    throw new InternalServerErrorException(
      `Can't create documentType - Check server logs`,
    );
  }
}
