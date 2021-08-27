import { Module } from '@nestjs/common';
import { ShopService } from './shop.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Shop } from './shop.entity';
import { ShopController } from './shop.controller';

@Module({
  providers: [ShopService],
  imports: [TypeOrmModule.forFeature([Shop])],
  controllers: [ShopController],
})
export class ShopModule {}