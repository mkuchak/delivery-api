import { ICreateAccountDTO } from '@/modules/accounts/contracts/ICreateAccountDTO'
import { IDeliverymanRepository } from '@/modules/deliverymen/contracts/IDeliverymanRepository'
import { Deliveryman } from '@/modules/deliverymen/entities/Deliveryman'

import { prisma } from '..'

class DeliverymanRepository implements IDeliverymanRepository {
  constructor () {}

  async create ({ email, password, name }: ICreateAccountDTO): Promise<number> {
    const { id } = await prisma.deliveryman.create({
      data: {
        name,
        email,
        password,
      },
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
