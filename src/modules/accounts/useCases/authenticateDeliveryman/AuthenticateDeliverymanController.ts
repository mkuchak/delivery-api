import { Request, Response } from 'express'
import StatusCode from 'status-code-enum'

import { DeliverymanRepository } from '@/shared/infra/repositories/prisma/repositories/DeliverymanRepository'

import { AuthenticateDeliverymanUseCase } from './AuthenticateDeliverymanUseCase'

class AuthenticateDeliverymanController {
  async handle (request: Request, response: Response): Promise<Response> {
    const data = {
      ...request.body,
    }

    const deliverymanRepository = new DeliverymanRepository()

    const authenticateDeliverymanUseCase = new AuthenticateDeliverymanUseCase(
      deliverymanRepository,
    )

    const payload = await authenticateDeliverymanUseCase.execute(data)

    return response.status(StatusCode.SuccessOK).json(payload)
  }
}

export { AuthenticateDeliverymanController }
