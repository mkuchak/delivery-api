import { ICreateAccountDTO } from '@/modules/accounts/dtos/ICreateAccountDTO'

import { Customer } from '../entities/Customer'

interface ICustomerRepository {
  create(account: ICreateAccountDTO): Promise<number>;
  findById(id: number): Promise<Customer>;
  findByEmail(email: string): Promise<Customer>;
}

export { ICustomerRepository }
