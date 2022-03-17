import { Request, Response } from 'express'
import StatusCode from 'status-code-enum'

import { CustomerRepository } from '@/shared/infra/repositories/prisma/repositories/CustomerRepository'

import { AuthenticateCustomerUseCase } from './AuthenticateCustomerUseCase'

class AuthenticateCustomerController {
  async handle (request: Request, response: Response): Promise<Response> {
    const data = {
      ...request.body,
    }

    const customerRepository = new CustomerRepository()

    const authenticateCustomerUseCase = new AuthenticateCustomerUseCase(
      customerRepository,
    )

    const payload = await authenticateCustomerUseCase.execute(data)

    return response.status(StatusCode.SuccessOK).json(payload)
  }
}

export { AuthenticateCustomerController }
