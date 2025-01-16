import "./Dashboard.style.css";

import { Layout, Menu } from "antd";
import { Navigate, Outlet } from "react-router-dom";

import { DashboardHeader } from "./components";
import PushNotificationModal from "./components/PushNotificationModal";
import { dashboardMenuItems } from "./Dashboard.data";
import useDashboard from "./useDashboard";

const { Header, Sider } = Layout;

export default function Dashboard() {
	const { currentPathName, restaurant } = useDashboard();

	if (!restaurant) return <Navigate to="/login" />;

	return (
		<>
			<Layout style={{ minHeight: "100vh" }}>
				<Sider collapsedWidth={60} breakpoint="md" style={{ height: "100vh", overflow: "auto" }}>
					<Menu theme="dark" mode="inline" items={dashboardMenuItems} selectedKeys={[currentPathName]} />
				</Sider>
				<Layout className="relative flex justify-end">
					<Header className="absolute top-0 w-full">
						<DashboardHeader />
					</Header>
					<div className="dashboard-layout">
						<Outlet />
					</div>
				</Layout>
			</Layout>
			<PushNotificationModal />
		</>
	);
}
