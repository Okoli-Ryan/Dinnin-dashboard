import { lazy } from 'react';

import VerificationScreen from "../features/auth/components/VerificationScreen";
import CreateRestaurant from "../features/createRestaurant";
import { IAppRoute } from "./utils";

const Login = lazy(() => import("../features/auth/components/Login"));
const Signup = lazy(() => import("../features/auth/components/Signup"));
const Menu = lazy(() => import("../features/menu"));
const Orders = lazy(() => import("../features/orders"));
const Tables = lazy(() => import("../features/tables"));
const Profile = lazy(() => import("../features/profile"));

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
		// index: true,
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
		Component: <Tables />,
		path: "/table",
	},
	{
		path: "*",
		redirectTo: "/orders",
	},
];
