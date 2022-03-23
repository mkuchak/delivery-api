import { Request, Response } from 'express'
import StatusCode from 'status-code-enum'

import { DeliveryRepository } from '@/shared/infra/repositories/prisma/repositories/DeliveryRepository'

import { FindCustomerDeliveriesUseCase } from './FindCustomerDeliveriesUseCase'

class FindCustomerDeliveriesController {
  async handle (request: Request, response: Response): Promise<Response> {
    const data = {
      customerId: request.customer_id,
    }

    const deliveryRepository = new DeliveryRepository()

    const findCustomerDeliveriesUseCase = new FindCustomerDeliveriesUseCase(
      deliveryRepository,
    )

    const payload = await findCustomerDeliveriesUseCase.execute(data)

    return response.status(StatusCode.SuccessOK).json(payload)
  }
}

export { FindCustomerDeliveriesController }
