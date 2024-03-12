import {BrowserRouter, Routes, Route} from 'react-router-dom'
import CreateAccount from './pages/createAccount'
import Dashboard from './pages/dashboard'
import Login from './pages/login'
import Messages from './pages/messages'
import Search from './pages/search'
import SettingsPage from './pages/settingsPage'
import PaymentInfoPage from './pages/PaymentInfoPage'
import { Provider } from 'urql'
import client from './urqlClient'

function App() {
  return (
    <Provider value={client}>
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
    </Provider>
  )
}

export default App
