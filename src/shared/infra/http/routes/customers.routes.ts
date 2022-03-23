import { Router } from 'express'

import { AuthenticateCustomerController } from '@/modules/accounts/useCases/authenticateCustomer/AuthenticateCustomerController'
import { CreateCustomerController } from '@/modules/customers/useCases/createCustomer/CreateCustomerController'
import { FindCustomerDeliveriesController } from '@/modules/customers/useCases/findCustomerDeliveries/FindCustomerDeliveriesController'

const createCustomerController = new CreateCustomerController()
const authenticateCustomerController = new AuthenticateCustomerController()
const findCustomerDeliveriesController = new FindCustomerDeliveriesController()

const customersRoutes = Router()

customersRoutes.post('/', createCustomerController.handle)
customersRoutes.post('/authenticate', authenticateCustomerController.handle)
customersRoutes.get('/deliveries', findCustomerDeliveriesController.handle)

export { customersRoutes }
