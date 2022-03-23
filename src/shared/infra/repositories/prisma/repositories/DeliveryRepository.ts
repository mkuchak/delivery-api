import { ICreateDeliveryDTO } from '@/modules/deliveries/contracts/ICreateDeliveryDTO'
import { IDeliveryRepository } from '@/modules/deliveries/contracts/IDeliveryRepository'
import { IUpdateDeliveryDTO } from '@/modules/deliveries/contracts/IUpdateDeliveryDTO'
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

  async update (delivery: IUpdateDeliveryDTO): Promise<void> {
    await prisma.deliveries.update({
      where: {
        id: delivery.id,
      },
      data: {
        ...delivery,
      },
    })
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
