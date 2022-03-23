import { ICreateDeliveryDTO } from '@/modules/deliveries/contracts/ICreateDeliveryDTO'
import { IDeliveryRepository } from '@/modules/deliveries/contracts/IDeliveryRepository'
import { IUpdateDeliveryDTO } from '@/modules/deliveries/contracts/IUpdateDeliveryDTO'
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

  async update (delivery: IUpdateDeliveryDTO): Promise<void> {
    const { id } = delivery

    this.repository[id] = {
      ...this.repository[id],
      updated_at: new Date(),
      ...delivery,
    }
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
