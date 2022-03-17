import { ICreateAccountDTO } from '@/modules/accounts/dtos/ICreateAccountDTO'
import { Deliveryman } from '@/modules/deliverymen/entities/Deliveryman'
import { IDeliverymanRepository } from '@/modules/deliverymen/repositories/IDeliverymanRepository'

class DeliverymanRepository implements IDeliverymanRepository {
  constructor (private repository: Deliveryman[] = []) {}

  async create ({ email, password, name }: ICreateAccountDTO): Promise<number> {
    const newDeliveryman = new Deliveryman()

    Object.assign(newDeliveryman, {
      id: this.repository.length + 1,
      email,
      password,
      name,
    })

    this.repository.push(newDeliveryman)

    return newDeliveryman.id
  }

  async findById (id: number): Promise<Deliveryman> {
    return this.repository.find((deliveryman) => deliveryman.id === id)
  }

  async findByEmail (email: string): Promise<Deliveryman> {
    return this.repository.find((deliveryman) => deliveryman.email === email)
  }
}

export { DeliverymanRepository }
