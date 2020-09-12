import {
    Controller,
    Post,
    Body,
    Get,
    Param,
    Patch,
    Delete,
  } from '@nestjs/common';

  import { AccountsModule } from 'src/accounts/accounts.module';
  import { AccountsService } from './command/application/service/accounts.service';


@Controller('accounts')
export class AccountsController {


    

    @Post()
    addAccount(
      @Body('accountnumber') accountnumber : string
    ){
        
      const retornoid = this.appService.addAccount(
        accountnumber,
      );
      return {id : retornoid}
    }

}
