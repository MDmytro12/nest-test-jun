import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { Goods } from "../goods/goods.entity";

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'shop',
    password: 'shop',
    database: 'shop',
    entities: [Goods],
    synchronize: true,
  })]
})
export class DatabaseModule {}
