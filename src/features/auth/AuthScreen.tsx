import { AnimatePresence } from 'framer-motion';
import { useState } from "react";
import { Outlet, useOutletContext } from "react-router-dom";

import BackgroundImage from '../../assets/images/BackgroundImage.jpg';
import VerificationNotice from "./components/VerificationNotice/VerificationNotice";

export default function AuthScreen() {
	const [showVerificationNote, setShowVerificationNote] = useState(false);

	return (
		<AnimatePresence mode="wait">
			<div className="flex h-screen justify-center items-center bg-gray-50">
				<div className="grid grid-cols-5 h-full w-full overflow-hidden">
					<div
						className="flex flex-col flex-1 h-screen col-span-3 bg-cover bg-center bg-no-repeat"
						style={{ backgroundImage: `url(${BackgroundImage})` }}></div>
					<div className="col-span-2 h-full flex  justify-center flex-col p-4 max-w-sm w-full mx-auto">
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
