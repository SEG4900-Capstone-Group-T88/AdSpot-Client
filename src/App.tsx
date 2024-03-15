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
