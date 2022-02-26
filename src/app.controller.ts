import { Body, Controller, Get, Post, Query, Headers } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/home')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('test')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('tests')
  test2(@Query() params): string {
    return params;
  }

  @Post('tests')
  testPost(@Query() query, @Body() body, @Headers() headers) {
    return { query, body, headers };
  }
}
