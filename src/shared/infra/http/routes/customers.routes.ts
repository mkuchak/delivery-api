import { Router } from 'express'

import { AuthenticateCustomerController } from '@/modules/accounts/useCases/authenticateCustomer/AuthenticateCustomerController'
import { CreateCustomerController } from '@/modules/customers/useCases/createCustomer/CreateCustomerController'

const createCustomerController = new CreateCustomerController()
const authenticateCustomerController = new AuthenticateCustomerController()

const customersRoutes = Router()

customersRoutes.post('/', createCustomerController.handle)
customersRoutes.post('/authenticate', authenticateCustomerController.handle)

export { customersRoutes }
