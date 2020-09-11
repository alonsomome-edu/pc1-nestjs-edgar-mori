import { ConflictException, Injectable } from '@nestjs/common';
import { getRepository } from 'typeorm';
import { CustomerTypeOrm } from '../../infra/persistence/typeorm/entities/customer.typeorm';
import { AddCustomer } from '../commands/add.customer';
import { AddCustomerResponseDto } from '../dto/add.customer.response.dto';
import { CustomerCommandMapper } from '../mappers/customer.command.mapper';

@Injectable()
export class CustomersService {
  constructor() {}

  async add(addCustomer: AddCustomer): Promise<AddCustomerResponseDto> {
    let customerTypeOrm: CustomerTypeOrm;
    try {
      customerTypeOrm = CustomerCommandMapper.toCustomerTypeOrm(addCustomer);
      const customerRepository = getRepository(CustomerTypeOrm);
      const ormResult = await customerRepository.insert(customerTypeOrm);
      const id = parseInt(ormResult.identifiers[0].id);
      customerTypeOrm.id = id;
    } catch (e) {
      console.log(e);
      throw new ConflictException(customerTypeOrm);
    }
    return CustomerCommandMapper.toAddCustomerResponseDto(customerTypeOrm);
  }
}
