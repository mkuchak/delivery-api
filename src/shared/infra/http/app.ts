import 'express-async-errors'
import 'dotenv/config'

import express, { json } from 'express'

import { handleErrors } from './middlewares/handleErrors'
import { router } from './routes'

const app = express()

app.use(json())

app.use(router)

app.use(handleErrors)

export { app }
