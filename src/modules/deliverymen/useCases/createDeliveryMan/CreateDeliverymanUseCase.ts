import { hash } from 'bcrypt'
import StatusCode from 'status-code-enum'

import { IAccountDTO } from '@/modules/accounts/contracts/IAccountDTO'
import { APIError } from '@/shared/errors/APIError'

import { IDeliverymanRepository } from '../../contracts/IDeliverymanRepository'

class CreateDeliverymanUseCase {
  constructor (private deliverymanRepository: IDeliverymanRepository) {}

  async execute ({ email, password, name }: IAccountDTO): Promise<number> {
    const deliveryman = await this.deliverymanRepository.findByEmail(email)

    if (deliveryman) {
      throw new APIError(
        'Deliveryman already exists',
        StatusCode.ClientErrorConflict,
      )
    }

    const hashPassword = await hash(password, 10)

    const newDeliverymanId = await this.deliverymanRepository.save({
      email,
      password: hashPassword,
      name,
    })

    return newDeliverymanId
  }
}

export { CreateDeliverymanUseCase }
