import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

const dbInstance = TypeOrmModule.forRoot({
  type: 'postgres',
  url: process.env.DATABASE_URL,
  entities: [],
  autoLoadEntities: true,
  synchronize: false,
});

@Module({ imports: [dbInstance], exports: [dbInstance] })
export class DatabaseModule {}
