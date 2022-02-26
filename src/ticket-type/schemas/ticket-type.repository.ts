import { EntityRepository, Repository } from 'typeorm';
import { TicketType } from './ticket-type.entity';

@EntityRepository(TicketType)
export class TicketTypeRepository extends Repository<TicketType> {}
