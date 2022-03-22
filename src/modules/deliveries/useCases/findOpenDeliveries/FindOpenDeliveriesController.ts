import { Request, Response } from 'express'

import { DeliveryRepository } from '@/shared/infra/repositories/prisma/repositories/DeliveryRepository'

import { FindOpenDeliveriesUseCase } from './FindOpenDeliveriesUseCase'

class FindOpenDeliveriesController {
  async handle (request: Request, response: Response): Promise<Response> {
    const data = {
      ...request.query,
    }

    const deliveryRepository = new DeliveryRepository()

    const findOpenDeliveriesUseCase = new FindOpenDeliveriesUseCase(
      deliveryRepository,
    )

    const payload = await findOpenDeliveriesUseCase.execute(data)

    return response.status(200).json(payload)
  }
}

export { FindOpenDeliveriesController }
