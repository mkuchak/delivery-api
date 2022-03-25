import { IDeliveryDTO } from '@/modules/deliveries/contracts/IDeliveryDTO'
import { IDeliveryRepository } from '@/modules/deliveries/contracts/IDeliveryRepository'
import { Delivery } from '@/modules/deliveries/entities/Delivery'

class DeliveryRepository implements IDeliveryRepository {
  constructor (private repository: Delivery[] = []) {}

  async save (delivery: IDeliveryDTO): Promise<number> {
    let { id } = delivery

    if (!id) {
      const newDelivery = new Delivery()

      id = this.repository.length + 1

      Object.assign(newDelivery, {
        id,
        ...delivery,
      })

      this.repository.push(newDelivery)
    } else {
      this.repository[id] = delivery
    }

    return delivery.id
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
    return this.repository
      .filter((delivery) => delivery.id_deliveryman === null)
      .sort((a, b) => a.id - b.id)
  }
}

export { DeliveryRepository }
