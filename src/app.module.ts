import { join } from 'path';
import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { StudentsModule } from './students/students.module';
import { DocumentTypesModule } from './document-types/document-types.module';
import { SeedModule } from './seed/seed.module';
import { PaymentConceptsModule } from './payment-concepts/payment-concepts.module';
import { CommonModule } from './common/common.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      database: process.env.DB_NAME,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      autoLoadEntities: true,
      synchronize: true,
    }),
    SeedModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
    StudentsModule,
    DocumentTypesModule,
    PaymentConceptsModule,
    CommonModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
