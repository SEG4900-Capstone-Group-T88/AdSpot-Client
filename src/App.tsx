import {BrowserRouter, Routes, Route} from 'react-router-dom'
import CreateAccount from './pages/createAccount'
import Dashboard from './pages/dashboard'
import Login from './pages/login'
import Messages from './pages/messages'
import Search from './pages/search'
import SettingsPage from './pages/settingsPage'
import PaymentInfoPage from './pages/PaymentInfoPage'

import { Client, Provider, cacheExchange, fetchExchange } from 'urql';


const client = new Client({
  url: 'http://localhost:3000/graphql',
  exchanges: [cacheExchange, fetchExchange],
  /**
  fetchOptions: () => {
    const token = getToken();
    return {
      headers: { Authorization: token ? 'Bearer: ${token}' : ''},
    };
  },
  */
});

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
