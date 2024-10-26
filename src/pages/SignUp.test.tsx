import { render, screen, mockClient, fireEvent } from '../../test-utils';
import '@testing-library/jest-dom'
import SignUp from './SignUp' 

it('clicks button to login', async () => {
  render(<SignUp/>)
  fireEvent.click(screen.getByRole('button', { name: /sign up/i }))
  expect(mockClient.executeMutation).toHaveBeenCalled()
  screen.getByText(/Already have an account?/i)
})

it('renders the "Search" button', () => {
  render(<SignUp />);
  const searchLink = screen.getByRole('button', { name: /Search/i });
  expect(searchLink).toBeVisible
});

it('renders the "Sign Up" link with correct href', async () => {          
  render(<SignUp/>)
  fireEvent.click(screen.getByRole('link', { name: /sign in/i }))
  expect(mockClient.executeMutation).toHaveBeenCalled()
})
