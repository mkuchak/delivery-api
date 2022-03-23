import { Request, Response } from 'express'
import StatusCode from 'status-code-enum'

import { DeliveryRepository } from '@/shared/infra/repositories/prisma/repositories/DeliveryRepository'

import { AcceptDeliveryUseCase } from './AcceptDeliveryUseCase'

class AcceptDeliveryController {
  async handle (request: Request, response: Response): Promise<Response> {
    const data = {
      deliveryId: Number(request.params.deliveryId),
      deliverymanId: request.deliveryman_id,
    }

    const deliveryRepository = new DeliveryRepository()

    const acceptDeliveryUseCase = new AcceptDeliveryUseCase(deliveryRepository)

    await acceptDeliveryUseCase.execute(data)

    return response.sendStatus(StatusCode.SuccessNoContent)
  }
}

export { AcceptDeliveryController }
