import { Body, Controller, Post } from '@nestjs/common';
import { AccountTypeOrm } from 'src/accounts/command/infra/persistence/typeorm/entities/account.typeorm';
import { Repository, Transaction, TransactionRepository } from 'typeorm';
import { PerformTransfer } from '../command/application/commands/perform.transfer';
import { PerformTransferRequestDto } from '../command/application/dto/perform.transfer.request.dto';
import { PerformTransferResponseDto } from '../command/application/dto/perform.transfer.response.dto';
import { TransactionCommandMapper } from '../command/application/mappers/transaction.command.mapper';
import { TransactionsService } from '../command/application/services/transactions.service';
import { TransactionTypeOrm } from '../command/infra/persistence/typeorm/entities/transaction.typeorm';

@Controller('transactions')
export class TransactionsController {
  constructor(private transactionsService: TransactionsService) {}

  @Post('transfer')
  @Transaction()
  performTransfer(
    @Body() performTransferRequestDto: PerformTransferRequestDto,
    @TransactionRepository(TransactionTypeOrm)
    transactionRepository: Repository<TransactionTypeOrm>,
    @TransactionRepository(AccountTypeOrm)
    accountRepository: Repository<AccountTypeOrm>,
  ): Promise<PerformTransferResponseDto> {
    const performTransfer: PerformTransfer = TransactionCommandMapper.toPerformTransferCommand(
      performTransferRequestDto,
    );
    return this.transactionsService.performTransfer(
      performTransfer,
      transactionRepository,
      accountRepository,
    );
  }
}
