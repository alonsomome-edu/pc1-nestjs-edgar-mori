import { PerformTransferRequestDto } from '../dto/perform.transfer.request.dto';
import { PerformTransfer } from '../commands/perform.transfer';
import { TransactionStatus } from '../../domain/enums/transaction.status.enum';
import { DateTime } from 'src/app/infra/utils/datetime';
import { TransactionTypeOrm } from '../../infra/persistence/typeorm/entities/transaction.typeorm';
import { PerformTransferResponseDto } from '../dto/perform.transfer.response.dto';

export class TransactionCommandMapper {
  public static toPerformTransferCommand(
    performTransferRequestDto: PerformTransferRequestDto,
  ): PerformTransfer {
    let performTransfer: PerformTransfer = new PerformTransfer();
    performTransfer.fromAccountNumber =
      performTransferRequestDto.fromAccountNumber;
    performTransfer.toAccountNumber = performTransferRequestDto.toAccountNumber;
    performTransfer.amount = performTransferRequestDto.amount;
    performTransfer.status = TransactionStatus.COMPLETED;
    performTransfer.createdAt = DateTime.getUtcDateTime();
    return performTransfer;
  }

  public static toPerformTransferResponseDto(
    transactionTypeOrm: TransactionTypeOrm,
  ): PerformTransferResponseDto {
    let performTransferResponseDto: PerformTransferResponseDto = new PerformTransferResponseDto();
    performTransferResponseDto.transactionId = Number(transactionTypeOrm.id);
    performTransferResponseDto.fromAccountNumber =
      transactionTypeOrm.fromAccount.number;
    performTransferResponseDto.toAccountNumber =
      transactionTypeOrm.toAccount.number;
    performTransferResponseDto.amount = Number(transactionTypeOrm.amount);
    performTransferResponseDto.status = transactionTypeOrm.status;
    performTransferResponseDto.createdAt = transactionTypeOrm.createdAt;
    return performTransferResponseDto;
  }
}
