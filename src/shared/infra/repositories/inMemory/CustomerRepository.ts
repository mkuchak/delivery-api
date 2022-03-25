import { IAccountDTO } from '@/modules/accounts/contracts/IAccountDTO'
import { ICustomerRepository } from '@/modules/customers/contracts/ICustomerRepository'
import { Customer } from '@/modules/customers/entities/Customer'

class CustomerRepository implements ICustomerRepository {
  constructor (private repository: Customer[] = []) {}

  async save (account: IAccountDTO): Promise<number> {
    let { id } = account

    if (!id) {
      const newCustomer = new Customer()

      id = this.repository.length + 1

      Object.assign(newCustomer, { id, ...account })

      this.repository.push(newCustomer)
    } else {
      this.repository[id] = account
    }

    return id
  }

  async findById (id: number): Promise<Customer> {
    return this.repository.find((customer) => customer.id === id)
  }

  async findByEmail (email: string): Promise<Customer> {
    return this.repository.find((customer) => customer.email === email)
  }
}

export { CustomerRepository }
