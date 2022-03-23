import { IDeliveryRepository } from '@/modules/deliveries/contracts/IDeliveryRepository'
import { Delivery } from '@/modules/deliveries/entities/Delivery'

interface IRequest {
  deliverymanId: number;
}

class FindDeliverymanDeliveriesUseCase {
  constructor (private deliveryRepository: IDeliveryRepository) {}

  async execute ({ deliverymanId }: IRequest): Promise<Delivery[]> {
    return await this.deliveryRepository.findByDeliverymanId(deliverymanId)
  }
}

export { FindDeliverymanDeliveriesUseCase }
