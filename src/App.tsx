import { Button, ConfigProvider } from 'antd';

import { Theme } from './core/Theme';
import AuthScreen from './features/auth';
import Routes from './routes';

export default function App() {
	return (
		<ConfigProvider theme={Theme}>
			<Routes />
		</ConfigProvider>
	);
}
