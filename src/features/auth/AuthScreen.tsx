import { AnimatePresence } from 'framer-motion';
import { Outlet } from 'react-router-dom';

import BackgroundImage from '../../assets/images/BackgroundImage.jpg';

export default function AuthScreen() {
	return (
		<AnimatePresence mode="wait">
			<div className="flex h-screen justify-center items-center bg-gray-50">
				<div className="grid grid-cols-5 h-full w-full overflow-hidden">
					<div
						className="flex flex-col flex-1 h-screen col-span-3 bg-cover bg-center bg-no-repeat"
						style={{ backgroundImage: `url(${BackgroundImage})` }}></div>
					<div className="col-span-2 h-full flex  justify-center flex-col p-4 max-w-sm w-full mx-auto">
						<Outlet />
					</div>
				</div>
			</div>
		</AnimatePresence>
	);
}
