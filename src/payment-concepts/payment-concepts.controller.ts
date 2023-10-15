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
  Query,
} from '@nestjs/common';
import { PaymentConceptsService } from './payment-concepts.service';
import { CreatePaymentConceptDto } from './dto/create-payment-concept.dto';
import { UpdatePaymentConceptDto } from './dto/update-payment-concept.dto';
import { PaginationDto } from 'src/common/dtos/pagination.dto';

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
  findAll(@Query() paginationDto: PaginationDto) {
    return this.paymentConceptsService.findAll(paginationDto);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.paymentConceptsService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePaymentConceptDto: UpdatePaymentConceptDto,
  ) {
    return this.paymentConceptsService.update(+id, updatePaymentConceptDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.paymentConceptsService.remove(id);
  }
}
