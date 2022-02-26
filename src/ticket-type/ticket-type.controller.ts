import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Patch,
  Query,
} from '@nestjs/common';
import { TicketTypeService } from './ticket-type.service';

@Controller('ticket-type')
export class TicketTypeController {
  constructor(private service: TicketTypeService) {}

  @Get()
  getAll(@Query() query) {
    return this.service.findAll(query);
  }

  @Get(':id')
  getById(@Param('id') id) {
    return this.service.findById(id);
  }

  @Post()
  postElement(@Body() body: any) {
    return this.service.createElement(body);
  }

  @Patch(':id')
  patchElement(@Param('id') id, @Body() body: any) {
    return this.service.updateElement({ ...body, id: Number(id) });
  }

  @Delete(':id')
  deleteElement(@Param('id') id) {
    return this.service.deleteById(id);
  }
}
