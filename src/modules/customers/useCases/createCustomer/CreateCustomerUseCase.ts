import { hash } from 'bcrypt'
import StatusCode from 'status-code-enum'

import { ICreateAccountDTO } from '@/modules/accounts/contracts/ICreateAccountDTO'
import { APIError } from '@/shared/errors/APIError'

import { ICustomerRepository } from '../../contracts/ICustomerRepository'

class CreateCustomerUseCase {
  constructor (private customerRepository: ICustomerRepository) {}

  async execute ({ email, password, name }: ICreateAccountDTO): Promise<number> {
    const customer = await this.customerRepository.findByEmail(email)

    if (customer) {
      throw new APIError(
        'Customer already exists',
        StatusCode.ClientErrorConflict,
      )
    }

    const hashPassword = await hash(password, 10)

    const newCustomerId = await this.customerRepository.create({
      email,
      password: hashPassword,
      name,
    })

    return newCustomerId
  }
}

export { CreateCustomerUseCase }
