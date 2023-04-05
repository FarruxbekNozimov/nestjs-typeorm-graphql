import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Column, CreateDateColumn, Entity, ObjectID, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity()
export class User {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number

  @Field({ nullable: true })
  @Column({ nullable: true })
  name: string

  @Field()
  @Column()
  email: string

  @Field()
  @CreateDateColumn()
  createdAt: Date

  @Field()
  @CreateDateColumn()
  updateAt: Date
}