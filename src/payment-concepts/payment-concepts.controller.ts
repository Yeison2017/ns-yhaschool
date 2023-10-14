import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Logger,
  ParseUUIDPipe,
  NotFoundException,
} from '@nestjs/common';
import { PaymentConceptsService } from './payment-concepts.service';
import { CreatePaymentConceptDto } from './dto/create-payment-concept.dto';
import { UpdatePaymentConceptDto } from './dto/update-payment-concept.dto';

@Controller('payment-concepts')
export class PaymentConceptsController {
  constructor(
    private readonly paymentConceptsService: PaymentConceptsService,
  ) {}

  @Post()
  create(@Body() createPaymentConceptDto: CreatePaymentConceptDto) {
    return this.paymentConceptsService.create(createPaymentConceptDto);
  }

  @Get()
  findAll() {
    return this.paymentConceptsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseUUIDPipe) id: string) {
    const paymentConcept = await this.paymentConceptsService.findOne(id);
    if (!paymentConcept) {
      throw new NotFoundException(`Payment concept with id ${id} not found`);
    }

    return paymentConcept;
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePaymentConceptDto: UpdatePaymentConceptDto,
  ) {
    return this.paymentConceptsService.update(+id, updatePaymentConceptDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.paymentConceptsService.remove(+id);
  }
}
