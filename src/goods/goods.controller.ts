import { Controller, Get } from "@nestjs/common";

@Controller('goods')
export class GoodsController{
  @Get()
  getAll(): string {
    return 'hello';
  }
}