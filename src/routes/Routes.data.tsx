import Login from '../features/auth/components/Login';
import Signup from '../features/auth/components/Signup';
import VerificationScreen from '../features/auth/components/VerificationScreen';
import { IAppRoute } from './utils';

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
		Component: <VerificationScreen />,
		path: "/verify",
	},
];