import StatusCode from 'status-code-enum'

import { APIError } from '@/shared/errors/APIError'

import { IDeliveryRepository } from '../../contracts/IDeliveryRepository'

interface IRequest {
  deliveryId: number;
  deliverymanId: number;
}

class AcceptDeliveryUseCase {
  constructor (private deliveryRepository: IDeliveryRepository) {}

  async execute ({ deliveryId, deliverymanId }: IRequest): Promise<void> {
    const delivery = await this.deliveryRepository.findById(deliveryId)

    if (!delivery) {
      throw new APIError('Delivery not found', StatusCode.ClientErrorNotFound)
    }

    if (delivery.id_deliveryman) {
      throw new APIError(
        'Delivery already accepted',
        StatusCode.ClientErrorConflict,
      )
    }

    delivery.id_deliveryman = deliverymanId
    delivery.started_at = new Date()

    await this.deliveryRepository.save(delivery)
  }
}

export { AcceptDeliveryUseCase }
