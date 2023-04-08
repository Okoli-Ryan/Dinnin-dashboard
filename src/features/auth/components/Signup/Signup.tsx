import React from 'react';

import { withFadeIn } from '../../../hoc';
import { SignupProvider } from './context/SignupContext';

function Signup() {
	return (
		<>
			<h3 className="text-center font-bold text-3xl">Create your restaurant today.</h3>
			<div className="flex flex-col gap-4 mt-4  justify-center">
				<SignupProvider />
			</div>
		</>
	);
}

export default withFadeIn(Signup);
