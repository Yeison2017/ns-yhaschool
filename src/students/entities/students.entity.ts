import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Student extends Document {
  @Prop({
    index: true,
  })
  firstName: string;

  @Prop({
    index: true,
  })
  secondName: string;

  @Prop({
    index: true,
  })
  lastName: string;

  @Prop({
    index: true,
  })
  secondSurname: string;

  @Prop({
    index: true,
  })
  identification: string;
}

export const StudentSchema = SchemaFactory.createForClass(Student);
