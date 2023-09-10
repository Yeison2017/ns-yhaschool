import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Student extends Document {
  @Prop({
    index: true,
  })
  firstName: string;

  secondName: string;

  @Prop({
    index: true,
  })
  lastName: string;

  secondSurname: string;

  @Prop({
    index: true,
  })
  identification: string;
}

export const StudentSchema = SchemaFactory.createForClass(Student);
