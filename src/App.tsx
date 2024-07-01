import {BrowserRouter, Routes, Route} from 'react-router-dom'
import CreateAccount from './pages/CreateAccount'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Messages from './pages/Messages'
import Search from './pages/Search'
import SettingsPage from './pages/SettingsPage'
import PaymentInfoPage from './pages/PaymentInfoPage'
import {useQuery} from 'urql'
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
import {JwtPayload, jwtDecode} from 'jwt-decode'
import {graphql} from './gql'

const GetUserContextInfoDocument = graphql(`
    query GetUserContextInfo($userId: Int!) {
        userById(userId: $userId) {
            ...UserContextInfo
        }
    }
`)

function App() {
    const [user, setUser] = useState<UserContextInfoFragment | null>(null)
    const [userId, setUserId] = useState(-1)

    const [{data}] = useQuery({
        query: GetUserContextInfoDocument,
        variables: {userId: userId},
    })

    useEffect(() => {
        console.log('App useEffect')
        const token = getToken()
        if (token) {
            const decoded = jwtDecode<JwtPayload>(token)
            if (decoded.exp && decoded.exp > Date.now() / 1000) {
                setUserId(parseInt(decoded.sub!))
            }
        }
        if (data?.userById) {
            const user = data.userById as UserContextInfoFragment
            setUser(user)
            console.log('App setUser')
        }
    }, [data])

    return (
        <ThemeProvider>
            <UserContext.Provider value={{user, setUser}}>
                <BrowserRouter>
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
                            path="/create-account"
                            element={<CreateAccount />}
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
                </BrowserRouter>
            </UserContext.Provider>
        </ThemeProvider>
    )
}

export default App
