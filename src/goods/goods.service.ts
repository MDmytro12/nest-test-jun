import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Goods } from './goods.entity';
import { DeleteResult, InsertResult, Repository, UpdateResult } from "typeorm";
import { GoodsDto } from "./dto/goods.dto";

@Injectable()
export class GoodsService{
  constructor(@InjectRepository(Goods) private readonly goodsRepository: Repository<Goods>) {
  }

  async findAll(): Promise<Goods[]>{
    return await this.goodsRepository.find();
  }

  async create(goods: GoodsDto): Promise<InsertResult>{
    return await this.goodsRepository.insert(goods);
  }

  async getById(id: string): Promise<Goods>{
    return await this.goodsRepository.findOne(id);
  }

  async removeById(id: string): Promise<DeleteResult>{
    return await this.goodsRepository.delete(id);
  }

  async update(goods: GoodsDto): Promise<UpdateResult>{
    return await this.goodsRepository.update(goods.id , goods);
  }
}