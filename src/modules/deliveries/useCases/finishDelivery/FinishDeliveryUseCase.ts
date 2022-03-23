import StatusCode from 'status-code-enum'

import { APIError } from '@/shared/errors/APIError'

import { IDeliveryRepository } from '../../contracts/IDeliveryRepository'

interface IRequest {
  deliveryId: number;
  deliverymanId: number;
}

class FinishDeliveryUseCase {
  constructor (private deliveryRepository: IDeliveryRepository) {}

  async execute ({ deliveryId, deliverymanId }: IRequest): Promise<void> {
    const delivery = await this.deliveryRepository.findById(deliveryId)

    if (!delivery) {
      throw new APIError('Delivery not found', StatusCode.ClientErrorNotFound)
    }

    if (!delivery.started_at) {
      throw new APIError(
        'Delivery not accepted yet',
        StatusCode.ClientErrorUnauthorized,
      )
    }

    if (delivery.id_deliveryman !== deliverymanId) {
      throw new APIError(
        'Delivery already accepted by another deliveryman',
        StatusCode.ClientErrorUnauthorized,
      )
    }

    if (delivery.delivered_at) {
      throw new APIError(
        'Delivery already finished',
        StatusCode.ClientErrorUnauthorized,
      )
    }

    if (delivery.canceled_at) {
      throw new APIError(
        'Delivery already canceled',
        StatusCode.ClientErrorUnauthorized,
      )
    }

    delivery.delivered_at = new Date()

    await this.deliveryRepository.update(delivery)
  }
}

export { FinishDeliveryUseCase }
