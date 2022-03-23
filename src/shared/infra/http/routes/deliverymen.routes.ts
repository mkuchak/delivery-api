import { Router } from 'express'

import { AuthenticateDeliverymanController } from '@/modules/accounts/useCases/authenticateDeliveryman/AuthenticateDeliverymanController'
import { CreateDeliverymanController } from '@/modules/deliverymen/useCases/createDeliveryMan/CreateDeliverymanController'

const createDeliverymanController = new CreateDeliverymanController()
const authenticateDeliverymanController =
  new AuthenticateDeliverymanController()

const deliverymenRoutes = Router()

deliverymenRoutes.post('/', createDeliverymanController.handle)
deliverymenRoutes.post(
  '/authenticate',
  authenticateDeliverymanController.handle,
)

export { deliverymenRoutes }
