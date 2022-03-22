import axios, { AxiosInstance } from 'axios'
import StatusCode from 'status-code-enum'

import { initializeWebServer, stopWebServer } from '@/shared/infra/http/setup'

let axiosAPIClient: AxiosInstance

const data = {
  email: 'johndoe@gmail.com',
  password: '123456',
  name: 'John Doe',
}

describe('Create customer controller', () => {
  beforeAll(async () => {
    const apiConnection: { port?: number } = await initializeWebServer()
    const baseURL = `http://localhost:${apiConnection.port}`

    axiosAPIClient = axios.create({
      baseURL,
      validateStatus: () => true,
    })
  })

  afterAll(async () => {
    await stopWebServer()
  })

  it('should create a customer', async () => {
    const {
      data: { customerId },
    } = await axiosAPIClient.post('/customers', data)

    expect(customerId).toBe(1)
  })

  it('should not create a customer with the same email', async () => {
    const { status } = await axiosAPIClient.post('/customers', data)

    expect(status).toBe(StatusCode.ClientErrorConflict)
  })
})
