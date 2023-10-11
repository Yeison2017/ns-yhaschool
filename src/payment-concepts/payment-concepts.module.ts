import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { PaymentConceptsService } from './payment-concepts.service';
import { PaymentConceptsController } from './payment-concepts.controller';
import { PaymentConcept } from './entities/payment-concept.entity';

@Module({
  controllers: [PaymentConceptsController],
  providers: [PaymentConceptsService],
  exports: [PaymentConceptsService],
  imports: [TypeOrmModule.forFeature([PaymentConcept])],
})
export class PaymentConceptsModule {}
