import { BankAccount } from 'src/accounts/command/domain/entities/account.entity';

export class Transaction {
  private id: number;
  private fromAccount: BankAccount;
  private toAccount: BankAccount;
  private amount: number;
  private createdAt: string;

  public constructor(
    id: number,
    fromAccount: BankAccount,
    toAccount: BankAccount,
    amount: number,
    createdAt: string,
  ) {
    this.id = id;
    this.fromAccount = fromAccount;
    this.toAccount = toAccount;
    this.amount = amount;
    this.createdAt = createdAt;
  }

  public getId(): number {
    return this.id;
  }

  public getFromAccount(): BankAccount {
    return this.fromAccount;
  }

  public getToAccount(): BankAccount {
    return this.toAccount;
  }

  public getAmount(): number {
    return this.amount;
  }

  public getCreatedAt(): string {
    return this.createdAt;
  }
}
