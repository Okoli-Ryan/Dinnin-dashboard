import React from 'react';

import { withFadeIn } from '../../../../hoc';
import { SignupProvider } from './context/SignupContext';

function Signup() {
	return <SignupProvider />;
}

export default withFadeIn(Signup);
