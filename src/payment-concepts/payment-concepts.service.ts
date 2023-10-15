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
      this.handleDBExceptions(error);
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

  update(id: number, updatePaymentConceptDto: UpdatePaymentConceptDto) {
    return `This action updates a #${id} paymentConcept`;
  }

  async remove(id: string) {
    const paymentConcept = await this.findOne(id);
    await this.paymentConceptRepository.remove(paymentConcept);
  }

  private handleDBExceptions(error: any) {
    if (error.code === '23505') {
      throw new BadRequestException(error.detail);
    }
    this.logger.error(error);
    throw new InternalServerErrorException(
      'Unexpected error, check server logs',
    );
  }
}
