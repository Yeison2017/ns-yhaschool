import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PaymentConceptsService } from './payment-concepts.service';
import { CreatePaymentConceptDto } from './dto/create-payment-concept.dto';
import { UpdatePaymentConceptDto } from './dto/update-payment-concept.dto';

@Controller('payment-concepts')
export class PaymentConceptsController {
  constructor(private readonly paymentConceptsService: PaymentConceptsService) {}

  @Post()
  create(@Body() createPaymentConceptDto: CreatePaymentConceptDto) {
    return this.paymentConceptsService.create(createPaymentConceptDto);
  }

  @Get()
  findAll() {
    return this.paymentConceptsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.paymentConceptsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePaymentConceptDto: UpdatePaymentConceptDto) {
    return this.paymentConceptsService.update(+id, updatePaymentConceptDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.paymentConceptsService.remove(+id);
  }
}
