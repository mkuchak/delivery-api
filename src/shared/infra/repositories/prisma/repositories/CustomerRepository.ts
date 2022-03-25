import { IAccountDTO } from '@/modules/accounts/contracts/IAccountDTO'
import { ICustomerRepository } from '@/modules/customers/contracts/ICustomerRepository'
import { Customer } from '@/modules/customers/entities/Customer'

import { prisma } from '..'

class CustomerRepository implements ICustomerRepository {
  constructor () {}

  async save (account: IAccountDTO): Promise<number> {
    const { id } = await prisma.customer.upsert({
      where: {
        email: account.email,
      },
      update: account,
      create: account,
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
