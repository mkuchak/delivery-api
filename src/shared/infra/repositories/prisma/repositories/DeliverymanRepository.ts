import { IAccountDTO } from '@/modules/accounts/contracts/IAccountDTO'
import { IDeliverymanRepository } from '@/modules/deliverymen/contracts/IDeliverymanRepository'
import { Deliveryman } from '@/modules/deliverymen/entities/Deliveryman'

import { prisma } from '..'

class DeliverymanRepository implements IDeliverymanRepository {
  constructor () {}

  async save (account: IAccountDTO): Promise<number> {
    const { id } = await prisma.deliveryman.upsert({
      where: {
        email: account.email,
      },
      update: account,
      create: account,
    })

    return id
  }

  async findById (id: number): Promise<Deliveryman> {
    return await prisma.deliveryman.findFirst({
      where: {
        id,
      },
    })
  }

  async findByEmail (email: string): Promise<Deliveryman> {
    return await prisma.deliveryman.findFirst({
      where: {
        email: {
          equals: email,
          mode: 'insensitive',
        },
      },
    })
  }
}

export { DeliverymanRepository }
