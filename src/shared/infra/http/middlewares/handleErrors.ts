import { NextFunction, Request, Response } from 'express'

import { APIError } from '@/shared/errors/AppError'

function handleErrors (
  error: Error,
  request: Request,
  response: Response,
  next: NextFunction,
) {
  if (error instanceof APIError) {
    return response.status(error.statusCode).json({
      status: 'error',
      message: error.message,
    })
  }

  return response.status(500).json({
    status: 'error',
    message: `Internal Server Error - ${error.message}`,
  })
}

export { handleErrors }
