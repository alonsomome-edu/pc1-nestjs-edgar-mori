import { Module } from '@nestjs/common';
import { AccountsController } from './api/accounts.controller';
import { AccountsService } from './command/application/service/accounts.service';

@Module({
  controllers: [AccountsController],
  providers: [AccountsService],
})
export class AccountsModule {

  constructor(
    public id: string,
    public accountnumber: string,
  ) {}

}
