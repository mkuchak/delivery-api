import { Router } from 'express'

import { CreateDeliverymanController } from '@/modules/deliverymen/useCases/createDeliveryMan/CreateDeliverymanController'

const createDeliverymanController = new CreateDeliverymanController()

const deliverymenRoutes = Router()

deliverymenRoutes.post('/', createDeliverymanController.handle)

export { deliverymenRoutes }
