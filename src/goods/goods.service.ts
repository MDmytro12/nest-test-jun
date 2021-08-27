import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Goods } from "./goods.entity";
import { Repository } from "typeorm";


@Injectable()
export class GoodsService{
  constructor(@InjectRepository(Goods) private readonly goodsRepository: Repository<Goods>) {
  }

  findAll(): Promise<Goods[]>{
    return this.goodsRepository.find();
  }
}