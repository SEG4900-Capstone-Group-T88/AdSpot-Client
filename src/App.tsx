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
import {UserBasicInfoFragment} from './gql/graphql'

function App() {
    const [user, setUser] = useState<UserBasicInfoFragment | null>(null)

    return (
        <Provider value={client}>
            <UserContext.Provider value={{user, setUser}}>
                <BrowserRouter>
                    <Routes>
                        <Route
                            path="/"
                            element={<Login />}
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
                            path="/payment"
                            element={<PaymentInfoPage />}
                        />
                    </Routes>
                </BrowserRouter>
            </UserContext.Provider>
        </Provider>
    )
}

export default App
