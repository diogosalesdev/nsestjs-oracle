import { Injectable } from '@nestjs/common';
import { Transaction } from './models/transaction.model';
import { getResSuc } from './transaction.oracle';

@Injectable()
export class TransactionService {
  async getTask(): Promise<Transaction[]> {
    return await getResSuc();
  }
}
