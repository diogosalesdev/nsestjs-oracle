import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'Transaction Summary' })
export class Transaction {
  @Field({ nullable: true })
  TRX_COUNT: number;

  @Field({ nullable: true })
  TRX_AMOUNT: number;

  @Field({ nullable: true })
  HEX_ID: string;
}
