import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { CreatePaymentConceptDto } from './dto/create-payment-concept.dto';
import { UpdatePaymentConceptDto } from './dto/update-payment-concept.dto';
import { PaymentConcept } from './entities/payment-concept.entity';

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

  // TODO: paginar
  findAll() {
    return this.paymentConceptRepository.find({});
  }

  findOne(id: string) {
    return this.paymentConceptRepository.findOneBy({ id });
  }

  update(id: number, updatePaymentConceptDto: UpdatePaymentConceptDto) {
    return `This action updates a #${id} paymentConcept`;
  }

  remove(id: number) {
    return `This action removes a #${id} paymentConcept`;
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
