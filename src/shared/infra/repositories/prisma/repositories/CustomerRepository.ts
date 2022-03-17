import { ICreateAccountDTO } from '@/modules/accounts/contracts/ICreateAccountDTO'
import { ICustomerRepository } from '@/modules/customers/contracts/ICustomerRepository'
import { Customer } from '@/modules/customers/entities/Customer'

import { prisma } from '..'

class CustomerRepository implements ICustomerRepository {
  constructor () {}

  async create ({ email, password, name }: ICreateAccountDTO): Promise<number> {
    const { id } = await prisma.customer.create({
      data: {
        email,
        password,
        name,
      },
    })

    return id
  }

  async findById (id: number): Promise<Customer> {
    return await prisma.customer.findFirst({
      where: {
        id,
      },
    })
  }

  async findByEmail (email: string): Promise<Customer> {
    return await prisma.customer.findFirst({
      where: {
        email: {
          equals: email,
          mode: 'insensitive',
        },
      },
    })
  }
}

export { CustomerRepository }
