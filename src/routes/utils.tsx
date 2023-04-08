import { ReactElement, Suspense } from 'react';
import { Route } from 'react-router-dom';

export const generateRoutes = ({ path, Component }: IAppRoute, i: any, prefix: string = ""): ReactElement => {
	return <Route key={i} path={prefix + path} element={<Suspense fallback={<div>Loading...</div>}>{Component}</Suspense>} />;
};

export interface IAppRoute {
	path: string;
	Component: any;
}
