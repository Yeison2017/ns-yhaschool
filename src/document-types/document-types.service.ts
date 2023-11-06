import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { validate as isUUID } from 'uuid';

import { DocumentType } from './entities/document-type.entity';
import { CreateDocumentTypeDto } from './dto/create-document-type.dto';
import { UpdateDocumentTypeDto } from './dto/update-document-type.dto';
import { Helpers } from 'src/common/utils/helpers';
import { PaginationDto } from '../common/dtos/pagination.dto';

@Injectable()
export class DocumentTypesService {
  constructor(
    @InjectRepository(DocumentType)
    private readonly documentTypeRepository: Repository<DocumentType>,
  ) {}

  private documentTypes: DocumentType[] = [
    // {
    //   id: uuid(),
    //   name: 'Cédula de ciudadanía',
    //   createAt: new Date().getTime(),
    // },
  ];

  async create(createDocumentTypeDto: CreateDocumentTypeDto) {
    try {
      const documentType = this.documentTypeRepository.create(
        createDocumentTypeDto,
      );
      await this.documentTypeRepository.save(documentType);
      return documentType;
    } catch (error) {
      Helpers.handleDBExceptions(error);
    }
  }

  findAll(paginationDto: PaginationDto) {
    const { limit = 10, offset = 0 } = paginationDto;
    return this.documentTypeRepository.find({
      take: limit,
      skip: offset,
    });
  }

  async findOne(term: string) {
    let documentType: DocumentType;

    if (isUUID(term)) {
      documentType = await this.documentTypeRepository.findOneBy({
        id: term,
      });
    } else {
      // documentType = await this.documentTypeRepository.findOneBy({
      //   abbreviation: term.trim().toUpperCase(),
      // });
      const queryBuilder =
        this.documentTypeRepository.createQueryBuilder('doct');
      documentType = await queryBuilder
        .where('name =:name or abbreviation =:abbreviation', {
          name: Helpers.capitalizeFirstLetter(term),
          abbreviation: term.trim().toUpperCase(),
        })
        // .leftJoinAndSelect('doct.photos', 'doctPhotos')
        .getOne();
    }

    if (!documentType) {
      throw new NotFoundException(`Document type with ${term} not found`);
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
