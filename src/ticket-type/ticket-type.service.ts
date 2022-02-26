import { Injectable, NotFoundException } from '@nestjs/common';
import { TicketTypeRepository } from './schemas/ticket-type.repository';
import { TicketType } from './schemas/ticket-type.entity';

@Injectable()
export class TicketTypeService {
  constructor(private ticketTypeRepository: TicketTypeRepository) {}

  findAll(query: any) {
    let conditions;
    if (query.skip && query.take) {
      conditions = {
        skip: Number(query.skip),
        take: Number(query.take),
      };
    }
    return this.ticketTypeRepository.find(conditions);
  }

  findById(id: number) {
    return this.ticketTypeRepository.findOne(id);
  }

  async createElement(body: Partial<TicketType>) {
    const model = this.ticketTypeRepository.create(body);
    return await this.ticketTypeRepository.save(model);
  }

  async updateElement(body: Partial<TicketType>) {
    const model = await this.ticketTypeRepository.findOne(body?.id);
    if (!model) {
      throw new NotFoundException(
        body,
        `The record with id ${body?.id} doesn't exist`,
      );
    }
    Object.assign(model, body);
    return await this.ticketTypeRepository.save(model);
  }

  async deleteById(id: number) {
    const model = await this.ticketTypeRepository.findOne(id);
    if (model) {
      await this.ticketTypeRepository.remove(model);
    }
    return;
  }
}
