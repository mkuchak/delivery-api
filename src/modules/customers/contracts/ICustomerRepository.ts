import { IAccountDTO } from '@/modules/accounts/contracts/IAccountDTO'

import { Customer } from '../entities/Customer'

interface ICustomerRepository {
  save(account: IAccountDTO): Promise<number>;
  findById(id: number): Promise<Customer>;
  findByEmail(email: string): Promise<Customer>;
}

export { ICustomerRepository }
