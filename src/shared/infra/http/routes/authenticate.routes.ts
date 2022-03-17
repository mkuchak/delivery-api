import { Router } from 'express'

import { AuthenticateCustomerController } from '@/modules/accounts/useCases/authenticateCustomer/AuthenticateCustomerController'
import { AuthenticateDeliverymanController } from '@/modules/accounts/useCases/authenticateDeliveryman/AuthenticateDeliverymanController'

const authenticateCustomerController = new AuthenticateCustomerController()
const authenticateDeliverymanController =
  new AuthenticateDeliverymanController()

const authenticateRoutes = Router()

authenticateRoutes.post('/customers', authenticateCustomerController.handle)
authenticateRoutes.post(
  '/deliverymen',
  authenticateDeliverymanController.handle,
)

export { authenticateRoutes }
