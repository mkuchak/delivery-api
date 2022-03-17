import { initializeWebServer } from './setup'

const start = async () => {
  await initializeWebServer()
}

start()
  .then(() => {
    console.log(
      `The app has started successfully on port ${process.env.APP_PORT}`,
    )
  })
  .catch((error) => {
    console.log('App occurred during startup', error)
  })
