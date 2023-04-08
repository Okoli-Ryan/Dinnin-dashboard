import { Button, ConfigProvider } from 'antd';

import { Theme } from './core/Theme';
import AuthScreen from './features/auth';

export default function App() {
	return (
		<ConfigProvider theme={Theme}>
			<AuthScreen />
		</ConfigProvider>
	);
}
