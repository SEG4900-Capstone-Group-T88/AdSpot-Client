import {Client, cacheExchange, fetchExchange} from 'urql'
import {authExchange} from '@urql/exchange-auth'

import {getToken} from './authStore'

const auth = authExchange(async (utilities) => {
    let token = getToken()

    return {
        addAuthToOperation(operation) {
            return token
                ? utilities.appendHeaders(operation, {
                      Authorization: `Bearer ${token}`,
                  })
                : operation
        },
        didAuthError(error) {
            return error.graphQLErrors.some((e) => e.extensions?.code === 'UNAUTHORIZED')
        },
        willAuthError(operation) {
            // Sync tokens on every operation
            token = getToken()

            if (!token) {
                // Detect our login mutation and let this operation through:
                return (
                    operation.kind !== 'mutation' ||
                    // Here we find any mutation definition with the "signin" field
                    !operation.query.definitions.some((definition) => {
                        return (
                            definition.kind === 'OperationDefinition' &&
                            definition.selectionSet.selections.some((node) => {
                                // The field name is just an example, since register may also be an exception
                                return node.kind === 'Field' && node.name.value === 'signin'
                            })
                        )
                    })
                )
            }
            return false
        },
        async refreshAuth() {},
    }
})

const client = new Client({
    url: 'http://localhost:8080',
    exchanges: [cacheExchange, auth, fetchExchange],
})

export default client
