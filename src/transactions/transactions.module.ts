import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountTypeOrm } from 'src/accounts/command/infra/persistence/typeorm/entities/account.typeorm';
import { TransactionsController } from './api/transactions.controller';
import { TransactionsService } from './command/application/services/transactions.service';
import { TransferDomainService } from './command/domain/services/transfer.domain.service';

@Module({
  imports: [TypeOrmModule.forFeature([AccountTypeOrm])],
  controllers: [TransactionsController],
  providers: [TransactionsService, TransferDomainService],
})
export class TransactionsModule {}
