import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Goods{
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;
}