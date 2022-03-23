import { IDeliveryRepository } from '@/modules/deliveries/contracts/IDeliveryRepository'
import { Delivery } from '@/modules/deliveries/entities/Delivery'

interface IRequest {
  customerId: number;
}

class FindCustomerDeliveriesUseCase {
  constructor (private deliveryRepository: IDeliveryRepository) {}

  async execute ({ customerId }: IRequest): Promise<Delivery[]> {
    return await this.deliveryRepository.findByCustomerId(customerId)
  }
}

export { FindCustomerDeliveriesUseCase }
