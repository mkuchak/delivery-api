import { NextFunction, Request, Response } from 'express'
import { verify } from 'jsonwebtoken'
import StatusCode from 'status-code-enum'

import { APIError } from '@/shared/errors/AppError'

interface IPayload {
  id: number;
}

async function ensureDeliverymanAuthenticated (
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const authorization = request.headers.authorization

  if (!authorization) {
    throw new APIError('Not authenticated', StatusCode.ClientErrorUnauthorized)
  }

  const [, accessToken] = authorization.split(' ')

  try {
    const { id } = verify(accessToken, process.env.JWT_SECRET) as IPayload

    if (id && typeof id === 'number') {
      request.deliveryman_id = id
    }

    return next()
  } catch (error) {
    throw new APIError('Not authenticated', StatusCode.ClientErrorUnauthorized)
  }
}

export { ensureDeliverymanAuthenticated }
