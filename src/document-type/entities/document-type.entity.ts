// export class DocumentType {
//   id: string;
//   name: string;

//   createAt: number;
//   updateAt?: number;
// }

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class DocumentType extends Document {
  // id: string;
  // @Prop({
  //   required: true,
  //   index: true,
  // })

  @Prop({
    required: true,
    unique: true,
    // index: true,
  })
  name: string;

  @Prop({
    required: true,
    unique: true,
    // index: true,
  })
  abbreviation: string;

  // createAt: number;
  // updateAt?: number;
}

export const DocumentTypeSchema = SchemaFactory.createForClass(DocumentType);
