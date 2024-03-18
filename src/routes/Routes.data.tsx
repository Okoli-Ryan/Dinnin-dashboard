import { lazy } from 'react';

import Staff from "@/features/staff/Staff";

import { IAppRoute } from "./utils";

const Login = lazy(() => import("../features/auth/components/Login"));
const Signup = lazy(() => import("../features/auth/components/Signup"));
const VerificationScreen = lazy(() => import("../features/auth/components/VerificationScreen"));
const CreateRestaurant = lazy(() => import("../features/createRestaurant"));
const Analytics = lazy(() => import("../features/analytics"));
const Menu = lazy(() => import("../features/menu"));
const Orders = lazy(() => import("../features/orders"));
const Tables = lazy(() => import("../features/tables"));
const Profile = lazy(() => import("../features/profile"));

export const AuthenticationRoutes: Array<IAppRoute> = [
	{
		redirectTo: "/login",
		path: "/",
	},
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
		redirectTo: "/login",
		path: "*",
	},
];

export const CommonRoutes: Array<IAppRoute> = [
	{
		Component: <VerificationScreen />,
		path: "/verify/:code",
	},
];

export const DashboardRoutes: Array<IAppRoute> = [
	{
		redirectTo: "/orders",
		path: "/",
	},
	{
		Component: <Orders />,
		path: "/orders",
	},
	{
		Component: <Profile />,
		path: "/profile",
	},
	{
		Component: <Analytics />,
		path: "/analytics",
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
		Component: <Staff />,
		path: "/staff",
	},
	{
		path: "*",
		redirectTo: "/orders",
	},
];
