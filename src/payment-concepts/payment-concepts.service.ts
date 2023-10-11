import { Injectable } from '@nestjs/common';
import { CreatePaymentConceptDto } from './dto/create-payment-concept.dto';
import { UpdatePaymentConceptDto } from './dto/update-payment-concept.dto';

@Injectable()
export class PaymentConceptsService {
  create(createPaymentConceptDto: CreatePaymentConceptDto) {
    return 'This action adds a new paymentConcept';
  }

  findAll() {
    return `This action returns all paymentConcepts`;
  }

  findOne(id: number) {
    return `This action returns a #${id} paymentConcept`;
  }

  update(id: number, updatePaymentConceptDto: UpdatePaymentConceptDto) {
    return `This action updates a #${id} paymentConcept`;
  }

  remove(id: number) {
    return `This action removes a #${id} paymentConcept`;
  }
}
