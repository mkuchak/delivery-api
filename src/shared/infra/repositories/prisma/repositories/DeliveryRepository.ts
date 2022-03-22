import { ICreateDeliveryDTO } from '@/modules/deliveries/contracts/ICreateDeliveryDTO'
import { IDeliveryRepository } from '@/modules/deliveries/contracts/IDeliveryRepository'
import { Delivery } from '@/modules/deliveries/entities/Delivery'

import { prisma } from '..'

class DeliveryRepository implements IDeliveryRepository {
  constructor () {}

  async create (delivery: ICreateDeliveryDTO): Promise<number> {
    const { id } = await prisma.deliveries.create({
      data: {
        ...delivery,
      },
    })

    return id
  }

  async findById (id: number): Promise<Delivery> {
    return await prisma.deliveries.findFirst({
      where: {
        id,
      },
    })
  }

  async findByCustomerId (customerId: number): Promise<Delivery[]> {
    return await prisma.deliveries.findMany({
      where: {
        customer: {
          id: customerId,
        },
      },
    })
  }

  async findByDeliverymanId (deliverymanId: number): Promise<Delivery[]> {
    return await prisma.deliveries.findMany({
      where: {
        deliveryman: {
          id: deliverymanId,
        },
      },
    })
  }
}

export { DeliveryRepository }
