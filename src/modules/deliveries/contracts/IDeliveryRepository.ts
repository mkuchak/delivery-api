import { Delivery } from '../entities/Delivery'
import { ICreateDeliveryDTO } from './ICreateDeliveryDTO'
import { IUpdateDeliveryDTO } from './IUpdateDeliveryDTO'

interface IDeliveryRepository {
  create(delivery: ICreateDeliveryDTO): Promise<number>;
  update(delivery: IUpdateDeliveryDTO): Promise<void>;
  findById(id: number): Promise<Delivery>;
  findByCustomerId(customerId: number): Promise<Delivery[]>;
  findByDeliverymanId(deliverymanId: number): Promise<Delivery[]>;
  findOpenDeliveries(): Promise<Delivery[]>;
}

export { IDeliveryRepository }
