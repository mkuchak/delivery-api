import { Router } from 'express'

import { AuthenticateDeliverymanController } from '@/modules/accounts/useCases/authenticateDeliveryman/AuthenticateDeliverymanController'
import { CreateDeliverymanController } from '@/modules/deliverymen/useCases/createDeliveryMan/CreateDeliverymanController'
import { FindDeliverymanDeliveriesController } from '@/modules/deliverymen/useCases/findDeliverymanDeliveries/FindDeliverymanDeliveriesController'

import { ensureDeliverymanAuthenticated } from '../middlewares/ensureDeliverymanAuthenticated'

const createDeliverymanController = new CreateDeliverymanController()
const authenticateDeliverymanController =
  new AuthenticateDeliverymanController()
const findDeliverymanDeliveriesController =
  new FindDeliverymanDeliveriesController()

const deliverymenRoutes = Router()

deliverymenRoutes.post('/', createDeliverymanController.handle)
deliverymenRoutes.post(
  '/authenticate',
  authenticateDeliverymanController.handle,
)
deliverymenRoutes.get(
  '/deliveries',
  ensureDeliverymanAuthenticated,
  findDeliverymanDeliveriesController.handle,
)

export { deliverymenRoutes }
