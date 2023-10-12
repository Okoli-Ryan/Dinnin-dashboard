import * as AdminApi from '@/api/AdminApi/Admin.api';
import * as Utils from '@/core/Utils';
import { mswServer, setupErrorHandlers, setupSuccessHandlers } from '@/api/AdminApi/Admin.msw';
import { render, renderHook, screen, userEvent, waitFor } from '@/testUtils';

import * as AuthScreen from '../../AuthScreen';
import Login from './Login';

beforeAll(() => {
	jest.spyOn(AuthScreen, "AuthScreenOutletContext").mockImplementation(() => {
		return {
			setShowVerificationNote: jest.fn(),
		};
	});

	mswServer.listen()
});

afterAll(() => {
	mswServer.close();
})

beforeEach(() => {
	// render(<Login />);
});

describe("Login Interaction works", () => {
	it("should render", () => {

		render(<Login />);
		const TitleHeader = screen.getByText(/Welcome/i);
		expect(TitleHeader).toBeDefined();
	});




	it("should fail validation on wrong input", async () => {
		//Disable AntD validator warnings
		console.warn = jest.fn();

		render(<Login />)


		const emailInput = screen.getByLabelText("Email");

		// Expect Email validation to work
		await userEvent.type(emailInput, "wrong");

		await userEvent.click(screen.getByRole("button", { name: "Sign In" }));

		expect(emailInput).toHaveClass("ant-input-status-error");

		await userEvent.type(emailInput, "wrong@email.com");

		await userEvent.click(screen.getByRole("button", { name: "Sign In" }));

		expect(emailInput).toHaveClass("ant-input-status-success");
	});





	it("form submission works", async () => {
		//Disable AntD validator warnings
		console.warn = jest.fn();

		const login = jest.fn();
		// renderHook(() => AdminApi.useLoginMutation())
		jest.spyOn(AdminApi, "useLoginMutation").mockReturnValue([login, { isLoading: false } as any]);
		render(<Login />)

		//Setup mock server
		setupSuccessHandlers()


		const payload = {
			email: "wrong@email.com",
			password: "Password1",
		};

		const emailInput = screen.getByLabelText("Email");
		const passwordInput = screen.getByLabelText("Password");

		await userEvent.type(emailInput, payload.email);
		await userEvent.type(passwordInput, payload.password);
		await userEvent.click(screen.getByRole("button", { name: "Sign In" }));


		await waitFor(() => expect(login).toHaveBeenCalledWith(payload))



	});


	it.only("Error response was called", async () => {

		setupSuccessHandlers()

		//Disable AntD validator warnings
		console.warn = jest.fn();

		const reportErrorMock = jest.spyOn(Utils, "reportErrorMessage")
		render(<Login />)


		const payload = {
			email: "wrong@email.com",
			password: "Password1",
		};

		const emailInput = screen.getByLabelText("Email");
		const passwordInput = screen.getByLabelText("Password");

		await userEvent.type(emailInput, payload.email);
		await userEvent.type(passwordInput, payload.password);
		await userEvent.click(screen.getByRole("button", { name: "Sign In" }));


		await waitFor(() => expect(reportErrorMock).toHaveBeenCalled());
	})
});
