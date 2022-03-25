import { hash } from 'bcrypt'
import StatusCode from 'status-code-enum'

import { IAccountDTO } from '@/modules/accounts/contracts/IAccountDTO'
import { APIError } from '@/shared/errors/APIError'

import { ICustomerRepository } from '../../contracts/ICustomerRepository'

class CreateCustomerUseCase {
  constructor (private customerRepository: ICustomerRepository) {}

  async execute ({ email, password, name }: IAccountDTO): Promise<number> {
    const customer = await this.customerRepository.findByEmail(email)

    if (customer) {
      throw new APIError(
        'Customer already exists',
        StatusCode.ClientErrorConflict,
      )
    }

    const hashPassword = await hash(password, 10)

    const newCustomerId = await this.customerRepository.save({
      email,
      password: hashPassword,
      name,
    })

    return newCustomerId
  }
}

export { CreateCustomerUseCase }
