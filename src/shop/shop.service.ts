import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Shop } from './shop.entity';
import { DeleteResult, InsertResult, Repository, UpdateResult } from "typeorm";
import { ShopDto } from "./dto/shop.dto";

@Injectable()
export class ShopService {
  constructor(@InjectRepository(Shop) private  readonly shopsRepository: Repository<Shop> ) {}

  async findAll(): Promise<Shop[]> {
    return await this.shopsRepository.find();
  }

  async create(newShop: ShopDto): Promise<InsertResult>{
    return await this.shopsRepository.insert(newShop);
  }

  async findById(id: string): Promise<Shop> {
    return await this.shopsRepository.findOne(id);
  }

  async removeById(id: string): Promise<DeleteResult>{
    return await this.shopsRepository.delete(id);
  }

  async update(updateShop: ShopDto): Promise<UpdateResult> {
    return await this.shopsRepository.update( updateShop.id , updateShop )
  }
}