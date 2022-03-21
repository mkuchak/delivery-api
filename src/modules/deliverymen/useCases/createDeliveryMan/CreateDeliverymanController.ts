import { Request, Response } from 'express'
import StatusCode from 'status-code-enum'

import { DeliverymanRepository } from '@/shared/infra/repositories/prisma/repositories/DeliverymanRepository'

import { CreateDeliverymanUseCase } from './CreateDeliverymanUseCase'

class CreateDeliverymanController {
  async handle (request: Request, response: Response): Promise<Response> {
    const data = {
      ...request.body,
    }

    const deliverymanRepository = new DeliverymanRepository()

    const createDeliverymanUseCase = new CreateDeliverymanUseCase(
      deliverymanRepository,
    )

    const payload = await createDeliverymanUseCase.execute(data)

    return response
      .status(StatusCode.SuccessCreated)
      .json({ deliverymanId: payload })
  }
}

export { CreateDeliverymanController }
