import { render, screen, mockClient, fireEvent } from '../../test-utils';
import '@testing-library/jest-dom'
import SignUp from './SignUp' 

it('renders signup', async () => {          
  render(<SignUp/>)
  fireEvent.click(screen.getByRole('button', { name: /sign up/i }))
  expect(mockClient.executeMutation).toHaveBeenCalled()
  screen.getByText(/Already have an account?/i)
})