// src/App.test.tsx

import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import App from './App';
import { Provider } from 'urql';
import { mockClient } from '../test-utils';

describe('App Component', () => {
  const routesToCheck = [
    { path: '/', expectedText: /Search promotions/i },
    { path: '/login', expectedText: /Sign In/i },
    { path: '/signup', expectedText: /Sign Up/i },
    { path: '/search', expectedText: /Filter/i },
    { path: '/dashboard', expectedText: /My Orders/i },
    { path: '/create-account', expectedText: /Create Account/i },
    { path: '/messages', expectedText: /Messages/i },
    { path: '/settings', expectedText: /Settings/i },
    { path: '/settings/connectedAccounts', expectedText: /Accounts/i },
    { path: '/settings/connectInstagramAccount', expectedText: /Instagram/i },
    { path: '/payment', expectedText: /Payouts/i },
    { path: '/user/123', expectedText: /User not found/i },
  ];

  routesToCheck.forEach(({ path, expectedText }) => {
    it(`renders the correct component for route "${path}"`, async () => {
      render(
        <MemoryRouter initialEntries={[path]}>
          <Provider value={mockClient}>
            <App />
          </Provider>
        </MemoryRouter>
      );

      await waitFor(() => {
        expect(screen.getByText(expectedText)).toBeInTheDocument();
      });
    });
  });
});
