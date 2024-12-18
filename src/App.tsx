import {Routes, Route} from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Messages from './pages/Messages'
import Search from './pages/Search'
import SettingsPage from './pages/SettingsPage'
import PaymentInfoPage from './pages/PaymentInfoPage'
import {cacheExchange, Client, fetchExchange, Provider} from 'urql'
import {UserContext} from './components/UserContext'
import {useEffect, useState} from 'react'
import {UserContextInfoFragment} from './gql/graphql'
import {ThemeProvider} from '@material-tailwind/react'
import SignUp from './pages/SignUp'
import ConnectedAccounts from './pages/ConnectedAccounts'
import ConnectInstagram from './components/connectionComponents/ConnectInstagram'
import Landing from './pages/Landing'
import UserProfile from './pages/UserProfile'
import {getToken} from './authStore'
import {graphql} from './gql'
import {authExchange} from '@urql/exchange-auth'

const WhoAmIQuery = graphql(`
    query WhoAmI {
        whoAmI {
            ...UserContextInfo
        }
    }
`)

function App() {
    const [user, setUser] = useState<UserContextInfoFragment | null>(null)

    function logout() {
        if (user) {
            setUser(null)
            alert('You have been logged out. Please log back in.')
            window.location.href = '/login' //useNavigate() doesn't work here
        }
        localStorage.clear()
    }

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
            willAuthError() {
                // Sync tokens on every operation
                token = getToken()

                return false
            },
            async refreshAuth() {
                // (triggered after an auth error has occurred)
                logout()
            },
        }
    })

    const client = new Client({
        url: 'https://localhost:8081',
        fetchSubscriptions: true,
        exchanges: [cacheExchange, auth, fetchExchange],
    })

    useEffect(() => {
        async function initializeUser() {
            const result = await client.query(WhoAmIQuery, {}).toPromise()
            if (result.data?.whoAmI) {
                const user = result.data.whoAmI as UserContextInfoFragment
                setUser(user)
            }
        }

        const token = getToken()
        if (token) {
            initializeUser()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <ThemeProvider>
            <Provider value={client}>
                <UserContext.Provider value={{user, setUser}}>
                    <Routes>
                        <Route
                            path="/"
                            element={<Landing />}
                        />
                        <Route
                            path="/login"
                            element={<Login />}
                        />
                        <Route
                            path="/signup"
                            element={<SignUp />}
                        />
                        <Route
                            path="/search"
                            element={<Search />}
                        />
                        <Route
                            path="/dashboard"
                            element={<Dashboard />}
                        />
                        <Route
                            path="/messages"
                            element={<Messages />}
                        />
                        <Route
                            path="/settings"
                            element={<SettingsPage />}
                        />
                        <Route
                            path="/settings/connectedAccounts"
                            element={<ConnectedAccounts />}
                        />
                        <Route
                            path="/settings/connectInstagramAccount"
                            element={<ConnectInstagram />}
                        />
                        <Route
                            path="/payment"
                            element={<PaymentInfoPage />}
                        />
                        <Route
                            path="/user/:userId"
                            element={<UserProfile />}
                        />
                    </Routes>
                </UserContext.Provider>
            </Provider>
        </ThemeProvider>
    )
}

export default App
