import { lazy } from "react";

import LoginRoute from "../features/auth/components/Login";
import SignupRoute from "../features/auth/components/Signup";
import VerificationScreen from "../features/auth/components/VerificationScreen";
import CreateRestaurant from "../features/createRestaurant";
import Dashboard from "../features/dashboard";
import Menu from "../features/menu";
import Orders from "../features/orders";
import Profile from "../features/profile";
import { IAppRoute } from "./utils";

const Login = lazy(() => import("../features/auth/components/Login"));
const Signup = lazy(() => import("../features/auth/components/Signup"));

export const AuthenticationRoutes: Array<IAppRoute> = [
	{
		Component: <Login />,
		path: "/login",
	},
	{
		Component: <Signup />,
		path: "/signup",
	},
	{
		Component: <CreateRestaurant />,
		path: "/create",
	},
	{
		Component: <Login />,
		path: "*",
	},
];

export const CommonRoutes: Array<IAppRoute> = [
	{
		Component: <VerificationScreen />,
		path: "/verify/:id/:code",
	},
];

export const DashboardRoutes: Array<IAppRoute> = [
	{
		Component: <Orders />,
		path: "/orders",
	},
	{
		Component: <Profile />,
		path: "/profile",
	},
	{
		Component: <Menu />,
		path: "/menu",
	},
	{
		path: "*",
		redirectTo: "/orders",
	},
];
