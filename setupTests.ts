import {HttpResponse, graphql } from 'msw'
import { setupServer } from 'msw/node'
 
export const handlers = [
  graphql.mutation('Login', () => {
    return HttpResponse.json({
        data: {
          user: {
            name: 'John',
          },
        },
      })
  }),
]

const server = setupServer(...handlers)
 
beforeAll(() => {
  // Start the interception.
  server.listen()
})
 
afterEach(() => {
  // Remove any handlers you may have added
  // in individual tests (runtime handlers).
  server.resetHandlers()
})
 
afterAll(() => {
  // Disable request interception and clean up.
  server.close()
})