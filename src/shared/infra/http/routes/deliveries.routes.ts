import { Router } from 'express'

import { CreateDeliveryController } from '@/modules/deliveries/useCases/createDelivery/CreateDeliveryController'
import { FindOpenDeliveriesController } from '@/modules/deliveries/useCases/findOpenDeliveries/FindOpenDeliveriesController'

import { ensureCustomerAuthenticated } from '../middlewares/ensureCustomerAuthenticated'
import { ensureDeliverymanAuthenticated } from '../middlewares/ensureDeliverymanAuthenticated'

const createDeliveryController = new CreateDeliveryController()
const findOpenDeliveriesController = new FindOpenDeliveriesController()

const deliveriesRoutes = Router()

deliveriesRoutes.post(
  '/create',
  ensureCustomerAuthenticated,
  createDeliveryController.handle,
)
deliveriesRoutes.get(
  '/',
  ensureDeliverymanAuthenticated,
  findOpenDeliveriesController.handle,
)

export { deliveriesRoutes }
