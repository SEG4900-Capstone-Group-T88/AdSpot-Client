import {Client, cacheExchange, fetchExchange} from 'urql'
import {authExchange} from '@urql/exchange-auth'
import {clearStorage, getToken, isTokenValid} from './authStore'

// https://commerce.nearform.com/open-source/urql/docs/advanced/authentication/
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
            return error.graphQLErrors.some((e) => e.extensions?.code === 'AUTH_NOT_AUTHORIZED')
        },
        willAuthError(operation) {
            // Sync tokens on every operation
            token = getToken()

            if (!isTokenValid(token)) {
                // Detect our login mutation and let this operation through:
                return (
                    operation.kind !== 'mutation' ||
                    // Here we find any mutation definition with the "signin" field
                    !operation.query.definitions.some((definition) => {
                        console.log(definition)
                        return (
                            definition.kind === 'OperationDefinition' &&
                            definition.selectionSet.selections.some((node) => {
                                // The field name is just an example, since register may also be an exception
                                return node.kind === 'Field' && node.name.value === 'login'
                            })
                        )
                    })
                )
            }
            return false
        },
        async refreshAuth() {
            // (triggered after an auth error has occurred)
            console.log('auth error; cleared local storage')
            clearStorage()
        },
    }
})

const client = new Client({
    url: 'https://localhost:8081',
    fetchSubscriptions: true,
    exchanges: [cacheExchange, auth, fetchExchange],
})

export default client
