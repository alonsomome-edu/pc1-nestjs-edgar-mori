import { Injectable } from '@nestjs/common';
import { AccountsModule } from 'src/accounts/accounts.module';

@Injectable()
export class AccountsService {

    private accounts: AccountsModule[]=[];
    addAccount(accountnumber : string){
        const id = new Date().toString();
        const newaccount = new AccountsModule(id,accountnumber);
        this.accounts.push(newaccount);
        return id;
      }


}
