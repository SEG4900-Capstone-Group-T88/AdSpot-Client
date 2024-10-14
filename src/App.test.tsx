import { render, screen, fireEvent } from '@testing-library/react';
import {mockClient} from '../test-utils';
import '@testing-library/jest-dom'
import App from './App';
import { MemoryRouter } from 'react-router-dom';

it('renders signup page', async () => {          
    render(
      <MemoryRouter initialEntries={["/signup"]}>
        <App/>
      </MemoryRouter>
    );
    screen.findByText(/submit/i)
    // expect(await screen.findByText(/submit/i))
    // expect(mockClient.executeMutation).toHaveBeenCalled()
  });
