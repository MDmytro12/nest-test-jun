import { Module } from "@nestjs/common";
import { GoodsService } from "./goods.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Goods } from "./goods.entity";
import { GoodsController } from "./goods.controller";


@Module({
  providers: [GoodsService],
  imports: [TypeOrmModule.forFeature([Goods])],
  controllers: [GoodsController],
})
export class GoodsModule {}