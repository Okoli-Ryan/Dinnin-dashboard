import React, { Fragment } from 'react';
import { Route, Routes as RoutesContainer, useLocation } from 'react-router-dom';

import AuthScreen from '../features/auth';
import Dashboard from "../features/dashboard";
import { useAppSelector } from "../store";
import { AuthenticationRoutes, CommonRoutes, DashboardRoutes } from "./Routes.data";
import { generateRoutes } from './utils';

export default function Routes() {
	const { pathname } = useLocation();
	const admin = useAppSelector((state) => state.admin);
	const isAuthenticated = admin?.restaurant;

	return (
		<RoutesContainer key={pathname}>
			{CommonRoutes.map((route, i) => (
				<Fragment key={i}>{generateRoutes(route, i)}</Fragment>
			))}
			{isAuthenticated ? (
				<Route path="/" element={<Dashboard />}>
					{DashboardRoutes.map((route, i) => (
						<Fragment key={i}>{generateRoutes(route, i)}</Fragment>
					))}
				</Route>
			) : (
				<Route path="/" element={<AuthScreen />}>
					{AuthenticationRoutes.map((route, i) => (
						<Fragment key={i}>{generateRoutes(route, i)}</Fragment>
					))}
				</Route>
			)}
		</RoutesContainer>
	);
}
