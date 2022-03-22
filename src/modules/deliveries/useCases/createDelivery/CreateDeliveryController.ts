import { Request, Response } from 'express'
import StatusCode from 'status-code-enum'

import { DeliveryRepository } from '@/shared/infra/repositories/prisma/repositories/DeliveryRepository'

import { CreateDeliveryUseCase } from './CreateDeliveryUseCase'

class CreateDeliveryController {
  async handle (request: Request, response: Response): Promise<Response> {
    const data = {
      ...request.body,
      customerId: request.customer_id,
    }

    const deliveryRepository = new DeliveryRepository()

    const createDeliveryUseCase = new CreateDeliveryUseCase(deliveryRepository)

    const payload = await createDeliveryUseCase.execute(data)

    return response
      .status(StatusCode.SuccessCreated)
      .json({ newDeliveryId: payload })
  }
}

export { CreateDeliveryController }
