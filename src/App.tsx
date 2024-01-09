import { ConfigProvider } from "antd";

import { Theme } from "./core/Theme";
import Routes from "./routes";

export default function App() {
	return (
		<ConfigProvider theme={Theme}>
			<Routes />
		</ConfigProvider>
	);
}
