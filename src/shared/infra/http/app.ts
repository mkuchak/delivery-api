import 'express-async-errors'
import 'dotenv/config'

import cors from 'cors'
import express, { json } from 'express'
import helmet from 'helmet'

import { handleErrors } from './middlewares/handleErrors'
import { router } from './routes'

const app = express()

app.use(json())
app.use(cors())
app.use(helmet())

app.use(router)

app.use(handleErrors)

export { app }
