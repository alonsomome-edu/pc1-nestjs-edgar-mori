import { Injectable } from '@nestjs/common';
import { getManager } from 'typeorm';
import { CustomerDto } from '../dto/customer.dto';
import { CustomerQueryMapper } from '../mappers/customer.query.mapper';

@Injectable()
export class CustomersQuery {
  public async getList(): Promise<CustomerDto[]> {
    const manager = getManager();
    const sql = `
    SELECT 
      customer_id,
      first_name,
      last_name,
      is_active,
      created_at,
      updated_at
    FROM 
      customer
    ORDER BY
      last_name, first_name;`;
    const ormCustomers: any = await manager.query(sql);
    return CustomerQueryMapper.toDtos(ormCustomers);
  }
}
