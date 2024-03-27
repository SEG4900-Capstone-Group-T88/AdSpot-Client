import {BrowserRouter, Routes, Route} from 'react-router-dom'
import CreateAccount from './pages/CreateAccount'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Messages from './pages/Messages'
import Search from './pages/Search'
import SettingsPage from './pages/SettingsPage'
import PaymentInfoPage from './pages/PaymentInfoPage'
import {Provider} from 'urql'
import client from './urqlClient'
import {UserContext} from './components/UserContext'
import {useState} from 'react'
import {UserContextInfoFragment} from './gql/graphql'
import {ThemeProvider} from '@material-tailwind/react'
import SignUp from './pages/SignUp'
import ConnectedAccounts from './pages/ConnectedAccounts'
import ConnectInstagram from './components/connectionComponents/ConnectInstagram'
import Landing from './pages/Landing'

function App() {
    const [user, setUser] = useState<UserContextInfoFragment | null>(null)

    return (
        <ThemeProvider>
            <Provider value={client}>
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
                        </Routes>
                    </BrowserRouter>
                </UserContext.Provider>
            </Provider>
        </ThemeProvider>
    )
}

export default App
