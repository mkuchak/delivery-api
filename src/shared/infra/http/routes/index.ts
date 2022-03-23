import { Router } from 'express'

import { customersRoutes } from './customers.routes'
import { deliveriesRoutes } from './deliveries.routes'
import { deliverymenRoutes } from './deliverymen.routes'

const router = Router()

router.use('/customers', customersRoutes)
router.use('/deliverymen', deliverymenRoutes)
router.use('/deliveries', deliveriesRoutes)

export { router }
