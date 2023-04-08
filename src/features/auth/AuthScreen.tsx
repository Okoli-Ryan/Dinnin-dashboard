import { Image } from 'antd';
import React from 'react';

import BackgroundImage from '../../assets/images/BackgroundImage.jpg';
import { Button } from '../../components';
import Login from './Login';
import Signup from './Signup';
import useAuthScreen from './useAuthScreen';

export default function AuthScreen() {
	const { showLoginForm, toggleLoginForm } = useAuthScreen();

	return (
		<div className="flex h-screen justify-center items-center bg-gray-50">
			<div className="grid grid-cols-5 h-full w-full overflow-hidden">
				<div
					className="flex flex-col flex-1 h-screen col-span-3 bg-cover bg-center bg-no-repeat"
					style={{ backgroundImage: `url(${BackgroundImage})` }}></div>
				<div className="col-span-2 h-full flex  justify-center flex-col p-4 max-w-sm w-full mx-auto">
					{showLoginForm ? <Login /> : <Signup />}
					{!showLoginForm ? <p className="text-center mt-4">
						Already have an account? <Button.Text onClick={toggleLoginForm}>Log in</Button.Text>
					</p>  : <p className="text-center mt-4">
						Don't have an account? <Button.Text onClick={toggleLoginForm}>Sign Up</Button.Text>
					</p>}
				</div>
			</div>
		</div>
	);
}
