import {render, screen} from '../../test-utils'
import '@testing-library/jest-dom'
import Messages from './Messages'

it('renders user messages page', async () => {
    render(<Messages />)
    screen.getByText(/Messages.../i)
})
