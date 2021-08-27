import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { GoodsService } from "./goods.service";
import { Goods } from "./goods.entity";
import { GoodsDto } from "./dto/goods.dto";
import { DeleteResult, InsertResult, UpdateResult } from "typeorm";

@Controller('goods')
export class GoodsController{
  constructor(private readonly goodsService: GoodsService) {}

  @Get()
  async getAll(): Promise<Goods[]> {
    return await this.goodsService.findAll();
  }

  @Post()
  async create(@Body() goods: GoodsDto): Promise<InsertResult>{
    return this.goodsService.create(goods);
  }

  @Get(':id')
  async getById(@Param('id') id: string): Promise<GoodsDto>{
    return this.goodsService.getById(id);
  }

  @Delete(':id')
  async deleteById(@Param('id') id: string): Promise<DeleteResult>{
    return this.goodsService.removeById(id);
  }

  @Patch()
  async update(@Body() goods: GoodsDto): Promise<UpdateResult>{
    return this.goodsService.update(goods);
  }
}