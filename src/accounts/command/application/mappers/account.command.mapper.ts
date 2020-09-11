import { CustomerCommandMapper } from 'src/customers/command/application/mappers/customer.command.mapper';
import { BankAccount } from '../../domain/entities/account.entity';
import { AccountTypeOrm } from '../../infra/persistence/typeorm/entities/account.typeorm';

export class AccountCommandMapper {
  public static toBankAccount(accountTypeOrm: AccountTypeOrm): BankAccount {
    const bankAccount: BankAccount = BankAccount.from(
      accountTypeOrm.id,
      accountTypeOrm.number,
      accountTypeOrm.balance,
      accountTypeOrm.isLocked,
      CustomerCommandMapper.toCustomerWithId(accountTypeOrm.customerId),
      accountTypeOrm.createdAt,
      accountTypeOrm.updatedAt,
    );
    return bankAccount;
  }

  public static toAccountTypeOrm(bankAccount: BankAccount): AccountTypeOrm {
    let accountTypeOrm: AccountTypeOrm = new AccountTypeOrm();
    accountTypeOrm.id = Number(bankAccount.getId());
    accountTypeOrm.number = bankAccount.getNumber();
    accountTypeOrm.balance = Number(bankAccount.getBalance());
    accountTypeOrm.isLocked = bankAccount.isIsLocked();
    (accountTypeOrm.customer = CustomerCommandMapper.toCustomerTypeOrmWithId(
      bankAccount.getCustomer().getId(),
    )),
      (accountTypeOrm.createdAt = bankAccount.getCreatedAt());
    accountTypeOrm.updatedAt = bankAccount.getUpdatedAt();
    return accountTypeOrm;
  }
}
