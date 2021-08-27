import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { ShopService } from './shop.service';
import { Shop } from './shop.entity';
import { ShopDto } from './dto/shop.dto';
import { DeleteResult, InsertResult, UpdateResult } from "typeorm";

@Controller('shop')
export class ShopController {

  constructor(private  readonly shopService: ShopService) {}

  @Get()
  async getAll(): Promise<Shop[]> {
    return await this.shopService.findAll();
  }

  @Post()
  async create(@Body() createShop: ShopDto): Promise<InsertResult>{
    return await this.shopService.create(createShop);
  }

  @Get(':id')
  async getById(@Param('id') id: string): Promise<Shop>{
    return this.shopService.findById(id);
  }

  @Delete(':id')
  async removeById(@Param('id') id: string): Promise<DeleteResult>{
    return this.shopService.removeById(id);
  }

  @Patch()
  async updateById(@Body() updateShop: ShopDto): Promise<UpdateResult>{
    return this.shopService.update(updateShop);
  }
}