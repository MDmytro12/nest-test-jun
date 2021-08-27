import { Controller, Get } from '@nestjs/common';

@Controller('shop')
export class ShopController{
  @Get()
  getAll(): string {
    return 'Hello from shop!';
  }
}