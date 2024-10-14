import { render, screen, mockClient, fireEvent } from '../../test-utils';
import '@testing-library/jest-dom'
import Login from './Login' 

it('renders login', async () => {          
  render(<Login/>)
  fireEvent.click(screen.getByRole('button', { name: /sign in/i }))
  expect(mockClient.executeMutation).toHaveBeenCalled()
  screen.getByText(/your email/i)
  screen.getByText(/password/i)
  screen.getByText(/sign in/i)
})