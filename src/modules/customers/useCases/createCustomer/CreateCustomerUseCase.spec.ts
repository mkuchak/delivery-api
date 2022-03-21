import StatusCode from 'status-code-enum'

import { APIError } from '@/shared/errors/AppError'
import { CustomerRepository } from '@/shared/infra/repositories/inMemory/CustomerRepository'

import { CreateCustomerUseCase } from './CreateCustomerUseCase'

let customerRepository: CustomerRepository
let createCustomerUseCase: CreateCustomerUseCase

const data = {
  email: 'johndoe@gmail.com',
  password: '123456',
  name: 'John Doe',
}

describe('Create customer use case', () => {
  beforeEach(() => {
    customerRepository = new CustomerRepository()
    createCustomerUseCase = new CreateCustomerUseCase(customerRepository)
  })

  it('should create a customer', async () => {
    const customerId = await createCustomerUseCase.execute(data)

    expect(customerId).toBe(1)
  })

  it('should not create a customer with the same email', async () => {
    await createCustomerUseCase.execute(data)

    expect(async () => {
      await createCustomerUseCase.execute(data)
    }).rejects.toStrictEqual(
      new APIError('Customer already exists', StatusCode.ClientErrorConflict),
    )
  })
})
