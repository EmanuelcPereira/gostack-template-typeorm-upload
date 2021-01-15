import { response } from 'express';
import { EntityRepository, getRepository, Repository } from 'typeorm';

import Transaction from '../models/Transaction';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

@EntityRepository(Transaction)
class TransactionsRepository extends Repository<Transaction> {
  // public async getBalance({ income, outcome, total }: Balance): Promise<Balance> {
  //   const transactionRepository = getRepository(Transaction);

  //   const { income, outcome} = transactionRepository.count

  // }
}

export default TransactionsRepository;
