import { Request, Response } from 'express'
import StatusCode from 'status-code-enum'

import { DeliveryRepository } from '@/shared/infra/repositories/prisma/repositories/DeliveryRepository'

import { FindDeliverymanDeliveriesUseCase } from './FindDeliverymanDeliveriesUseCase'

class FindDeliverymanDeliveriesController {
  async handle (request: Request, response: Response): Promise<Response> {
    const data = {
      deliverymanId: request.deliveryman_id,
    }

    const deliveryRepository = new DeliveryRepository()

    const findDeliverymanDeliveriesUseCase =
      new FindDeliverymanDeliveriesUseCase(deliveryRepository)

    const payload = await findDeliverymanDeliveriesUseCase.execute(data)

    return response.status(StatusCode.SuccessOK).json(payload)
  }
}

export { FindDeliverymanDeliveriesController }
