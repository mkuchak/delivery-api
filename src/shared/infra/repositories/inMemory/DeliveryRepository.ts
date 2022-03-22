import { ICreateDeliveryDTO } from '@/modules/deliveries/contracts/ICreateDeliveryDTO'
import { IDeliveryRepository } from '@/modules/deliveries/contracts/IDeliveryRepository'
import { Delivery } from '@/modules/deliveries/entities/Delivery'

class DeliveryRepository implements IDeliveryRepository {
  constructor (private repository: Delivery[] = []) {}

  async create (delivery: ICreateDeliveryDTO): Promise<number> {
    const newDelivery = new Delivery()

    Object.assign(newDelivery, {
      id: this.repository.length + 1,
      ...delivery,
    })

    this.repository.push(newDelivery)

    return newDelivery.id
  }

  async findById (id: number): Promise<Delivery> {
    return this.repository.find((delivery) => delivery.id === id)
  }

  async findByCustomerId (customerId: number): Promise<Delivery[]> {
    return this.repository.filter(
      (delivery) => delivery.id_customer === customerId,
    )
  }

  async findByDeliverymanId (deliverymanId: number): Promise<Delivery[]> {
    return this.repository.filter(
      (delivery) => delivery.id_deliveryman === deliverymanId,
    )
  }

  async findOpenDeliveries (): Promise<Delivery[]> {
    return this.repository.filter(
      (delivery) =>
        delivery.delivered_at === null && delivery.canceled_at === null,
    )
  }
}

export { DeliveryRepository }
