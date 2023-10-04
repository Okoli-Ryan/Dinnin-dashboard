import "@/../jest/mocks/jsdomMock.js";
import "whatwg-fetch";

import { ReactElement } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, MemoryRouter } from "react-router-dom";

import { render, renderHook, RenderOptions } from "@testing-library/react";

import { store } from "./store/Store";

export const Wrapper = ({ children }: { children: React.ReactNode }) => {
	return (
		<MemoryRouter initialEntries={["/"]}>
			<Provider store={store}>{children}</Provider>
		</MemoryRouter>
	);
};

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, "wrapper">) => render(ui, { wrapper: Wrapper, ...options });
const customRenderHook = <T extends any>(hook: (e: T) => any, options?: Omit<RenderOptions, "wrapper">) => renderHook(hook, { wrapper: Wrapper, ...options });

export * from "@testing-library/react";
export { userEvent } from "@testing-library/user-event";
// import '@testing-library/jest-dom/extend-expect'
export { customRender as render, customRenderHook as renderHook };
