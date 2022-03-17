import { Router } from 'express'

import { CreateCustomerController } from '@/modules/customers/useCases/createCustomer/CreateCustomerController'

const createCustomerController = new CreateCustomerController()

const customersRoutes = Router()

customersRoutes.post('/', createCustomerController.handle)

export { customersRoutes }
