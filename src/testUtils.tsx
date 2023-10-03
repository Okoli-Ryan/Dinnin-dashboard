import "@/../.jest/mocks/jsdomMock.js"
import "whatwg-fetch"

import { Provider } from 'react-redux';
import { store } from './store/Store';
import { render, RenderOptions } from '@testing-library/react'
import { ReactElement } from 'react';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';

const AllProviders = ({ children }: { children: React.ReactNode }) => {
    return (
        <MemoryRouter initialEntries={['/']}>
            <Provider store={store}>{children}</Provider>
        </MemoryRouter>
    )

}

const customRender = (
    ui: ReactElement,
    options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, { wrapper: AllProviders, ...options })

export * from '@testing-library/react'
export { userEvent } from '@testing-library/user-event'
import '@testing-library/jest-dom/extend-expect'
export { customRender as render }