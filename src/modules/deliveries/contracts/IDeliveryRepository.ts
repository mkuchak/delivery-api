import { Delivery } from '../entities/Delivery'
import { IDeliveryDTO } from './IDeliveryDTO'

interface IDeliveryRepository {
  save(delivery: IDeliveryDTO): Promise<number>;
  findById(id: number): Promise<Delivery>;
  findByCustomerId(customerId: number): Promise<Delivery[]>;
  findByDeliverymanId(deliverymanId: number): Promise<Delivery[]>;
  findOpenDeliveries(): Promise<Delivery[]>;
}

export { IDeliveryRepository }
