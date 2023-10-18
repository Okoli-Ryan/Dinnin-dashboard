import { Button, ConfigProvider } from 'antd';
import { useEffect } from 'react';

import SuccessAudio from '@/assets/audio/success.aac';

import { Theme } from './core/Theme';
import AuthScreen from './features/auth';
import Routes from './routes';

export default function App() {


	useEffect(() => {
		setTimeout(() => {
			const successAudio = new Audio(SuccessAudio);
			successAudio.play();
		}, 5000);
	}, []);

	return (
		<ConfigProvider theme={Theme}>
			<Routes />
		</ConfigProvider>
	);
}
