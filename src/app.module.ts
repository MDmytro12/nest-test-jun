import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { GoodsModule } from './goods/goods.module';

@Module({
  imports: [DatabaseModule, GoodsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
