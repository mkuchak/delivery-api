import { IAccountDTO } from '@/modules/accounts/contracts/IAccountDTO'
import { IDeliverymanRepository } from '@/modules/deliverymen/contracts/IDeliverymanRepository'
import { Deliveryman } from '@/modules/deliverymen/entities/Deliveryman'

class DeliverymanRepository implements IDeliverymanRepository {
  constructor (private repository: Deliveryman[] = []) {}

  async save (account: IAccountDTO): Promise<number> {
    let { id } = account

    if (!id) {
      const newDeliveryman = new Deliveryman()

      id = this.repository.length + 1

      Object.assign(newDeliveryman, { id, ...account })

      this.repository.push(newDeliveryman)
    } else {
      this.repository[id] = account
    }

    return id
  }

  async findById (id: number): Promise<Deliveryman> {
    return this.repository.find((deliveryman) => deliveryman.id === id)
  }

  async findByEmail (email: string): Promise<Deliveryman> {
    return this.repository.find((deliveryman) => deliveryman.email === email)
  }
}

export { DeliverymanRepository }
