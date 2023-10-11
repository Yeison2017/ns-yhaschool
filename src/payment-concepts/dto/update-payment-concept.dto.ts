import { PartialType } from '@nestjs/mapped-types';
import { CreatePaymentConceptDto } from './create-payment-concept.dto';

export class UpdatePaymentConceptDto extends PartialType(CreatePaymentConceptDto) {}
