// import AppError from '../errors/AppError';
import { getCustomRepository } from 'typeorm';
import Transaction from '../models/Transaction';
import TransactionRepository from '../repositories/TransactionsRepository';

interface Request {
  title: string;

  value: number;

  type: 'income' | 'outcome';

  category: string;
}
class CreateTransactionService {
  public async execute({
    title,
    value,
    type,
    category,
  }: Request): Promise<Transaction> {
    const transactionRepository = getCustomRepository(TransactionRepository);

    // if (!['income', 'outcome'].includes(type)) {
    //   throw new Error('Transaction type is invalid');
    // }

    // const { total } = transactionRepository.getBalance();

    // if (type === 'outcome' && total < value) {
    //   throw new Error('You do not have enough balance');
    // }

    const transaction = transactionRepository.create({
      title,
      value,
      type,
    });

    await transactionRepository.save(transaction);

    return transaction;
  }
}

export default CreateTransactionService;
