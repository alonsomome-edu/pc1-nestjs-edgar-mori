import { Body, Controller, Get, Post } from '@nestjs/common';
import { AddCustomer } from '../command/application/commands/add.customer';
import { AddCustomerRequestDto } from '../command/application/dto/add.customer.request.dto';
import { AddCustomerResponseDto } from '../command/application/dto/add.customer.response.dto';
import { CustomerCommandMapper } from '../command/application/mappers/customer.command.mapper';
import { CustomersService } from '../command/application/services/customers.service';
import { CustomerDto } from '../query/dto/customer.dto';
import { CustomersQuery } from '../query/queries/customers.query';

@Controller('customers')
export class CustomersController {
  constructor(
    private customersService: CustomersService,
    private customersQuery: CustomersQuery,
  ) {}

  @Post()
  add(
    @Body() addCustomerRequestDto: AddCustomerRequestDto,
  ): Promise<AddCustomerResponseDto> {
    const addCustomer: AddCustomer = CustomerCommandMapper.toAddCustomerCommand(
      addCustomerRequestDto,
    );
    return this.customersService.add(addCustomer);
  }

  @Get()
  getList(): Promise<CustomerDto[]> {
    return this.customersQuery.getList();
  }
}
