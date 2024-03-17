import { render, screen, waitFor } from "@/testUtils";
import AuthScreen from "./AuthScreen";
import { MemoryRouter, Navigate, Route, Routes } from "react-router-dom";
import * as Selector from "@/store/Store";
import Login from "./components/Login";
import Signup from "./components/Signup";
import React from "react";

describe("AuthScreen works", () => {

	const Component = (
		<Routes>
			<Route path="/" element={<AuthScreen />}>
				<Route path="login" element={<Login />} />
				<Route path="/" element={<Navigate replace to="/login" />} />
			</Route>
		</Routes>
	);


	it("should redirect to login", async () => {

		render(Component)


		expect(screen.getByText(/Welcome/i)).toBeDefined();

	})

	it.only("should show verification notice component", () => {

		jest.spyOn(React, "useState").mockReturnValue([true, jest.fn()])

		render(Component)

		expect(screen.getByText(/A Verification Code has been sent to your email/i)).toBeDefined(
			
		)

	})

})