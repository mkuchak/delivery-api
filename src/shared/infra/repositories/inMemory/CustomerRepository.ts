import { ICreateAccountDTO } from '@/modules/accounts/dtos/ICreateAccountDTO'
import { Customer } from '@/modules/customers/entities/Customer'
import { ICustomerRepository } from '@/modules/customers/repositories/ICustomerRepository'

class CustomerRepository implements ICustomerRepository {
  constructor (private repository: Customer[] = []) {}

  async create ({ email, password, name }: ICreateAccountDTO): Promise<number> {
    const newCustomer = new Customer()

    Object.assign(newCustomer, {
      id: this.repository.length + 1,
      email,
      password,
      name,
    })

    this.repository.push(newCustomer)

    return newCustomer.id
  }

  async findById (id: number): Promise<Customer> {
    return this.repository.find((customer) => customer.id === id)
  }

  async findByEmail (email: string): Promise<Customer> {
    return this.repository.find((customer) => customer.email === email)
  }
}

export { CustomerRepository }
