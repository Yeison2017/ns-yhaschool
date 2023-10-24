import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { CreatePaymentConceptDto } from './dto/create-payment-concept.dto';
import { UpdatePaymentConceptDto } from './dto/update-payment-concept.dto';
import { PaymentConcept } from './entities/payment-concept.entity';
import { PaginationDto } from 'src/common/dtos/pagination.dto';
import { Helpers } from 'src/common/utils/helpers';

@Injectable()
export class PaymentConceptsService {
  private readonly logger = new Logger('PaymentConceptsService');

  constructor(
    @InjectRepository(PaymentConcept)
    private readonly paymentConceptRepository: Repository<PaymentConcept>,
  ) {}

  async create(createPaymentConceptDto: CreatePaymentConceptDto) {
    try {
      const paymentConcept = this.paymentConceptRepository.create(
        createPaymentConceptDto,
      );
      await this.paymentConceptRepository.save(paymentConcept);
      return paymentConcept;
    } catch (error) {
      Helpers.handleDBExceptions(error);
    }
  }

  findAll(paginationDto: PaginationDto) {
    const { limit = 10, offset = 0 } = paginationDto;
    return this.paymentConceptRepository.find({
      take: limit,
      skip: offset,
    });
  }

  async findOne(id: string) {
    const paymentConcept = await this.paymentConceptRepository.findOneBy({
      id,
    });
    if (!paymentConcept) {
      throw new NotFoundException(`Payment concept with id ${id} not found`);
    }
    return paymentConcept;
  }

  async update(id: string, updatePaymentConceptDto: UpdatePaymentConceptDto) {
    const paymentConcept = await this.paymentConceptRepository.preload({
      id,
      ...updatePaymentConceptDto,
    });

    if (!paymentConcept) {
      throw new NotFoundException(`Payment concept with id ${id} not found`);
    }

    try {
      await this.paymentConceptRepository.save(paymentConcept);
    } catch (error) {
      // this.handleDBExceptions(error);
      Helpers.handleDBExceptions(error);
    }

    return paymentConcept;
  }

  async remove(id: string) {
    const paymentConcept = await this.findOne(id);
    await this.paymentConceptRepository.remove(paymentConcept);
  }
}
