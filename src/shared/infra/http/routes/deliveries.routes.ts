import { Router } from 'express'

import { CreateDeliveryController } from '@/modules/deliveries/useCases/createDelivery/CreateDeliveryController'

import { ensureCustomerAuthenticated } from '../middlewares/ensureCustomerAuthenticated'

const createDeliveryController = new CreateDeliveryController()

const deliveriesRoutes = Router()

deliveriesRoutes.post(
  '/customers',
  ensureCustomerAuthenticated,
  createDeliveryController.handle,
)
// deliveriesRoutes.post('/deliverymen', acceptDeliveryController.handle)

export { deliveriesRoutes }
