import { render, screen, mockClient, fireEvent } from '../../test-utils';
import '@testing-library/jest-dom'
import Landing from './Landing';

it('Landing signup', async () => {          
  render(<Landing/>)
  screen.getByText(/Search promotions/i)
})