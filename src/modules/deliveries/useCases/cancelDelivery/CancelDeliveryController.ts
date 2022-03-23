import { Request, Response } from 'express'
import StatusCode from 'status-code-enum'

import { DeliveryRepository } from '@/shared/infra/repositories/prisma/repositories/DeliveryRepository'

import { CancelDeliveryUseCase } from './CancelDeliveryUseCase'

class CancelDeliveryController {
  async handle (request: Request, response: Response): Promise<Response> {
    const data = {
      deliveryId: Number(request.params.deliveryId),
      deliverymanId: request.deliveryman_id,
    }

    const deliveryRepository = new DeliveryRepository()

    const cancelDeliveryUseCase = new CancelDeliveryUseCase(deliveryRepository)

    await cancelDeliveryUseCase.execute(data)

    return response.sendStatus(StatusCode.SuccessNoContent)
  }
}

export { CancelDeliveryController }
