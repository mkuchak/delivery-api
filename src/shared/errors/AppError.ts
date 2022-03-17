class APIError {
  constructor (readonly message = 'Bad request', readonly statusCode = 400) {}
}

export { APIError }
