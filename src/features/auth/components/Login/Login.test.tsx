import { render, screen, userEvent } from "@/testUtils";
import Login from "./Login";
import * as AuthScreen from "../../AuthScreen";

beforeAll(() => {

    jest.spyOn(AuthScreen, "AuthScreenOutletContext").mockImplementation(() => {
        return {
            setShowVerificationNote: jest.fn()
        }
    })
})

beforeAll(() => {
    render(<Login />)
})

describe('Login Interaction works', () => {
    it('should render', () => {


        const TitleHeader = screen.getByText(/Welcome/i);
        expect(TitleHeader).toBeDefined()
    })


    it('should fail validation on wrong input', async () => {

        const emailInput = screen.getByRole("textbox", { name: "Email" })
        // const passwordInput = screen.getByRole("textbox", { name: "Password" })

        await userEvent.type(emailInput, "wrong")

        await userEvent.click(screen.getByRole("button", { name: "Sign In" }))

        expect(emailInput).toHaveClass("ant-input-status-error")

    })

    // it('should send accurate payload', async () => {

    //     const emailInput = screen.getByRole("textbox", { name: "Email" })
    //     const passwordInput = screen.getByRole("textbox", { name: "Password" })

    //     await userEvent.type(emailInput, "")


    // })
});