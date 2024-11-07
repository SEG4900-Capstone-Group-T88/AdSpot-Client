import {render, screen} from '../../test-utils'
import '@testing-library/jest-dom'
import Dashboard from './Dashboard'

it('renders user dashboard', async () => {
    render(<Dashboard />)
    screen.getByText(/Welcome back to AdSpot!/i)
})
