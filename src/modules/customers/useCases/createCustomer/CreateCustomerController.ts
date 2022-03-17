import { Request, Response } from 'express'
import StatusCode from 'status-code-enum'

import { CustomerRepository } from '@/shared/infra/repositories/prisma/repositories/CustomerRepository'

import { CreateCustomerUseCase } from './CreateCustomerUseCase'

class CreateCustomerController {
  async handle (request: Request, response: Response): Promise<Response> {
    const data = {
      ...request.body,
    }

    const customerRepository = new CustomerRepository()

    const createCustomerUseCase = new CreateCustomerUseCase(customerRepository)

    const payload = await createCustomerUseCase.execute(data)

    return response
      .status(StatusCode.SuccessCreated)
      .json({ customerId: payload })
  }
}

export { CreateCustomerController }
