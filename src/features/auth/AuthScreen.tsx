import './AuthScreen.style.css';

import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Navigate, Outlet, useOutletContext } from 'react-router-dom';

import { useAppSelector } from '../../store';
import VerificationNotice from './components/VerificationNotice/VerificationNotice';

export default function AuthScreen() {
	const [showVerificationNote, setShowVerificationNote] = useState(false);
	const restaurant = useAppSelector((state) => state.restaurant);

	if (restaurant) return <Navigate replace to="/" />;

	return (
		<AnimatePresence mode="wait">
			<div className="flex items-center justify-center h-screen bg-gray-50">
				<div className="grid w-full h-full grid-cols-5 overflow-hidden">
					<div
						data-testid="background-image"
						className="flex-col flex-1 hidden h-screen col-span-3 bg-center bg-no-repeat bg-cover md:flex background-image"></div>
					<div className="flex flex-col justify-center w-full h-full max-w-sm col-span-5 p-4 mx-auto md:col-span-2">
						<div className="absolute bg-center bg-contain rounded-full size-12 background-image md:hidden top-4 left-4"></div>
						{showVerificationNote ? <VerificationNotice /> : <Outlet context={{ setShowVerificationNote }} />}
					</div>
				</div>
			</div>
		</AnimatePresence>
	);
}

export interface IAuthScreenOutletContext {
	setShowVerificationNote: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AuthScreenOutletContext = () => useOutletContext<IAuthScreenOutletContext>();
