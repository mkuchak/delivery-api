import { compare } from 'bcrypt'
import { sign } from 'jsonwebtoken'
import StatusCode from 'status-code-enum'

import { ICustomerRepository } from '@/modules/customers/contracts/ICustomerRepository'
import { APIError } from '@/shared/errors/APIError'

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  accessToken: string;
  refreshToken?: string;
}

class AuthenticateCustomerUseCase {
  constructor (private customerRepository: ICustomerRepository) {}

  async execute ({ email, password }: IRequest): Promise<IResponse> {
    const customer = await this.customerRepository.findByEmail(email)

    const isPasswordCorrect =
      customer && (await compare(password, customer.password))

    if (customer && isPasswordCorrect) {
      const { id, email } = customer

      const accessToken = sign({ id, email }, process.env.JWT_CUSTOMER_SECRET, {
        subject: id.toString(),
        expiresIn: process.env.JWT_EXPIRES_IN,
      })

      return {
        accessToken,
      }
    }

    throw new APIError(
      'Invalid e-mail or password',
      StatusCode.ClientErrorUnauthorized,
    )
  }
}

export { AuthenticateCustomerUseCase }
