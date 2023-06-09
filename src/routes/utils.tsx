import { ReactElement, Suspense } from 'react';
import { Navigate, Route } from "react-router-dom";

export const generateRoutes = (route: IAppRoute, i: any, prefix: string = ""): ReactElement => {
	if ("redirectTo" in route)
		return (
			<Route
				key={i}
				path={prefix + route.path}
				element={
					<Suspense fallback={<div>Loading...</div>}>
						<Navigate to={route.redirectTo} />
					</Suspense>
				}
			/>
		);

	return <Route key={i} path={prefix + route.path} element={<Suspense fallback={<div>Loading...</div>}>{route.Component}</Suspense>} />;
};

export interface IAppRouteBase {
	path: string;
}
export interface IRedirectAppRoute extends IAppRouteBase {
	redirectTo: string;
}

export interface IRoute extends IAppRouteBase {
	Component: JSX.Element;
}

export type IAppRoute = IRedirectAppRoute | IRoute;
