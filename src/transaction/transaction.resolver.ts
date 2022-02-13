import { Resolver, Query } from '@nestjs/graphql';
import { Transaction } from './models/transaction.model';
import { TransactionService } from './transaction.service';

@Resolver('Transaction')
export class TransactionResolver {
  constructor(private readonly transactionService: TransactionService) {}

  @Query((type) => [Transaction])
  async DataSummary() {
    return await this.transactionService.getTask();
  }
}
