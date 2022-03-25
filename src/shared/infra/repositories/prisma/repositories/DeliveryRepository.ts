import { IDeliveryDTO } from '@/modules/deliveries/contracts/IDeliveryDTO'
import { IDeliveryRepository } from '@/modules/deliveries/contracts/IDeliveryRepository'
import { Delivery } from '@/modules/deliveries/entities/Delivery'

import { prisma } from '..'

class DeliveryRepository implements IDeliveryRepository {
  constructor () {}

  async save (delivery: IDeliveryDTO): Promise<number> {
    const { id } = await prisma.deliveries.upsert({
      where: {
        id: delivery.id ?? -1,
      },
      update: delivery,
      create: delivery,
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

  async findOpenDeliveries (): Promise<Delivery[]> {
    return await prisma.deliveries.findMany({
      where: {
        id_deliveryman: null,
      },
      orderBy: {
        created_at: 'asc',
      },
    })
  }
}

export { DeliveryRepository }
