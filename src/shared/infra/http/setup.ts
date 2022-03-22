import { RequestHandler } from 'express'
import { Server } from 'http'

import { app } from './app'

let serverConnection: Server

const initializeWebServer = (customMiddleware?: RequestHandler) => {
  return new Promise((resolve, reject) => {
    if (customMiddleware) {
      app.use(customMiddleware)
    }

    const webServerPort =
      process.env.NODE_ENV === 'test' ? null : process.env.PORT

    serverConnection = app.listen(webServerPort, () => {
      resolve(serverConnection.address())
    })
  })
}

const stopWebServer = () => {
  return new Promise((resolve, reject) => {
    serverConnection.close(() => {
      resolve('Web server stopped')
    })
  })
}

export { initializeWebServer, stopWebServer }
