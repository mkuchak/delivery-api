import { Router } from 'express'

import { authenticateRoutes } from './authenticate.routes'
import { customersRoutes } from './customers.routes'

const router = Router()

router.use('/authenticate', authenticateRoutes)
router.use('/customers', customersRoutes)

export { router }
