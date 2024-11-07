import {render, screen} from '../../test-utils'
import '@testing-library/jest-dom'
import Landing from './Landing'

it('renders landing signup', async () => {
    render(<Landing />)
    screen.getByText(/Search promotions/i)
})

it('renders the "Search promotions" link with correct href', () => {
    render(<Landing />)
    const searchLink = screen.getByRole('link', {name: /Search promotions/i})
    expect(searchLink).toHaveAttribute('href', '/search')
})

it('renders the "Post promotion" section', () => {
    render(<Landing />)
    const postPromotionText = screen.getByText(/Post promotion/i)
    expect(postPromotionText).toBeInTheDocument()
})

it('renders the "Payment info" section', () => {
    render(<Landing />)
    const postPromotionText = screen.getByText(/Payment info/i)
    expect(postPromotionText).toBeInTheDocument()
})
