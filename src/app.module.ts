import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { TicketTypeModule } from './ticket-type/ticket-type.module';

@Module({
  imports: [DatabaseModule, TicketTypeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
