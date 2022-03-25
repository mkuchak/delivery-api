import { IAccountDTO } from '@/modules/accounts/contracts/IAccountDTO'

import { Deliveryman } from '../entities/Deliveryman'

interface IDeliverymanRepository {
  save(account: IAccountDTO): Promise<number>;
  findById(id: number): Promise<Deliveryman>;
  findByEmail(email: string): Promise<Deliveryman>;
}

export { IDeliverymanRepository }
