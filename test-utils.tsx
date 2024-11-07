import React, {ReactElement} from 'react'
import {render, RenderOptions} from '@testing-library/react'
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'urql'
import {never} from 'wonka'

export const mockClient = {
    executeQuery: vi.fn(() => never),
    executeMutation: vi.fn(() => never),
    executeSubscription: vi.fn(() => never),
}

const AllTheProviders = ({children}: {children: React.ReactNode}) => {
    return (
        <Provider value={mockClient}>
            <BrowserRouter>{children}</BrowserRouter>
        </Provider>
    )
}

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
    render(ui, {wrapper: AllTheProviders, ...options})

export * from '@testing-library/react'
export {customRender as render}
