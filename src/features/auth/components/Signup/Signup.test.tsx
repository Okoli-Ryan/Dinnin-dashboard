import { render, screen } from "@/testUtils"
import Signup from "./Signup"
import * as AuthScreen from "../../AuthScreen"

beforeAll(() => {
    jest.spyOn(AuthScreen, "AuthScreenOutletContext").mockImplementation(() => {
        return {
            setShowVerificationNote: jest.fn()
        }
    })
})

describe("Signup component renders", () => {

    it("Should render", () => {


        render(<Signup />)

        const TitleHeader = screen.getByText(/Sign up today/i)

        expect(TitleHeader).toBeDefined()
    })
})