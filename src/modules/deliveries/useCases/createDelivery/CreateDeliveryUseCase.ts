import { IDeliveryRepository } from '../../contracts/IDeliveryRepository'

interface IRequest {
  itemName: string;
  customerId: number;
}

class CreateDeliveryUseCase {
  constructor (private deliveryRepository: IDeliveryRepository) {}

  async execute (data: IRequest): Promise<number> {
    const newDeliveryId = await this.deliveryRepository.create({
      item_name: data.itemName,
      id_customer: data.customerId,
    })

    return newDeliveryId
  }
}

export { CreateDeliveryUseCase }
