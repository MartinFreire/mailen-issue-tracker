import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TicketTypeController } from './ticket-type.controller';
import { TicketTypeService } from './ticket-type.service';
import { TicketTypeRepository } from './schemas/ticket-type.repository';

@Module({
  imports: [TypeOrmModule.forFeature([TicketTypeRepository])],
  controllers: [TicketTypeController],
  providers: [TicketTypeService],
})
export class TicketTypeModule {}
