import { ICreateAccountDTO } from '@/modules/accounts/contracts/ICreateAccountDTO'

import { Deliveryman } from '../entities/Deliveryman'

interface IDeliverymanRepository {
  create(account: ICreateAccountDTO): Promise<number>;
  findById(id: number): Promise<Deliveryman>;
  findByEmail(email: string): Promise<Deliveryman>;
}

export { IDeliverymanRepository }
