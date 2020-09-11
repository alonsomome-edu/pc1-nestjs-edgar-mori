export class PerformTransferResponseDto {
  public transactionId: number;
  public fromAccountNumber: string;
  public toAccountNumber: string;
  public amount: number;
  public status: number;
  public createdAt: string;
}
