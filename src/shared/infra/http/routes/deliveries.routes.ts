import { Router } from 'express'

import { AcceptDeliveryController } from '@/modules/deliveries/useCases/acceptDelivery/AcceptDeliveryController'
import { CancelDeliveryController } from '@/modules/deliveries/useCases/cancelDelivery/CancelDeliveryController'
import { CreateDeliveryController } from '@/modules/deliveries/useCases/createDelivery/CreateDeliveryController'
import { FindOpenDeliveriesController } from '@/modules/deliveries/useCases/findOpenDeliveries/FindOpenDeliveriesController'
import { FinishDeliveryController } from '@/modules/deliveries/useCases/finishDelivery/FinishDeliveryController'

import { ensureCustomerAuthenticated } from '../middlewares/ensureCustomerAuthenticated'
import { ensureDeliverymanAuthenticated } from '../middlewares/ensureDeliverymanAuthenticated'

const createDeliveryController = new CreateDeliveryController()
const findOpenDeliveriesController = new FindOpenDeliveriesController()
const acceptDeliveryController = new AcceptDeliveryController()
const finishDeliveryController = new FinishDeliveryController()
const cancelDeliveryController = new CancelDeliveryController()

const deliveriesRoutes = Router()

deliveriesRoutes.post(
  '/',
  ensureCustomerAuthenticated,
  createDeliveryController.handle,
)
deliveriesRoutes.get(
  '/',
  ensureDeliverymanAuthenticated,
  findOpenDeliveriesController.handle,
)
deliveriesRoutes.patch(
  '/:deliveryId/accept',
  ensureDeliverymanAuthenticated,
  acceptDeliveryController.handle,
)
deliveriesRoutes.patch(
  '/:deliveryId/finish',
  ensureDeliverymanAuthenticated,
  finishDeliveryController.handle,
)
deliveriesRoutes.patch(
  '/:deliveryId/cancel',
  ensureDeliverymanAuthenticated,
  cancelDeliveryController.handle,
)

export { deliveriesRoutes }
