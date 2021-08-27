import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { GoodsModule } from './goods/goods.module';
import { ShopModule } from './shop/shop.module';

@Module({
  imports: [DatabaseModule, GoodsModule, ShopModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
