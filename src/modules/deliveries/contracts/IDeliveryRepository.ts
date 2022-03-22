import { Delivery } from '../entities/Delivery'
import { ICreateDeliveryDTO } from './ICreateDeliveryDTO'

interface IDeliveryRepository {
  create(data: ICreateDeliveryDTO): Promise<number>;
  findById(id: number): Promise<Delivery>;
  findByCustomerId(customerId: number): Promise<Delivery[]>;
  findByDeliverymanId(deliverymanId: number): Promise<Delivery[]>;
  findOpenDeliveries(): Promise<Delivery[]>;
}

export { IDeliveryRepository }
