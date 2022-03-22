import { IDeliveryRepository } from '../../contracts/IDeliveryRepository'
import { Delivery } from '../../entities/Delivery'

interface IRequest { // pagination not implemented
  page?: number;
  perPage?: number;
}

interface IResponse {
  deliveries: Delivery[];
  totalPages?: number;
}

class FindOpenDeliveriesUseCase {
  constructor (private deliveryRepository: IDeliveryRepository) {}

  async execute (data: IRequest): Promise<IResponse> {
    const deliveries = await this.deliveryRepository.findOpenDeliveries()

    return {
      deliveries,
    }
  }
}

export { FindOpenDeliveriesUseCase }
