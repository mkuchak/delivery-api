import { compare } from 'bcrypt'
import { sign } from 'jsonwebtoken'
import StatusCode from 'status-code-enum'

import { IDeliverymanRepository } from '@/modules/deliverymen/contracts/IDeliverymanRepository'
import { APIError } from '@/shared/errors/AppError'

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  accessToken: string;
  refreshToken?: string;
}

class AuthenticateDeliverymanUseCase {
  constructor (private deliverymanRepository: IDeliverymanRepository) {}

  async execute ({ email, password }: IRequest): Promise<IResponse> {
    const deliveryman = await this.deliverymanRepository.findByEmail(email)

    const isPasswordCorrect = await compare(password, deliveryman.password)

    if (deliveryman && isPasswordCorrect) {
      const { id, email } = deliveryman

      const token = sign({ email }, process.env.JWT_SECRET, {
        subject: id.toString(),
        expiresIn: process.env.JWT_EXPIRES_IN,
      })

      return {
        accessToken: token,
      }
    }

    throw new APIError(
      'Invalid e-mail or password',
      StatusCode.ClientErrorUnauthorized,
    )
  }
}

export { AuthenticateDeliverymanUseCase }
