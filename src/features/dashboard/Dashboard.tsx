import { Layout, Menu } from "antd";
import React, { memo, useMemo, useState } from "react";
import { Navigate, NavLink, Outlet } from "react-router-dom";

import { DashboardHeader } from "./components";
import NotificationInfoModal from "./components/NotificationInfoModal";
import { dashboardMenuItems } from "./Dashboard.data";
import useDashboard from "./useDashboard";
import usePushNotifications from "./usePushNotifications";

const { Header, Content, Footer, Sider } = Layout;

export default function Dashboard() {
	const { currentPathName, restaurant } = useDashboard();
	const { onCloseNotificationMessage, showNotificationMessage } = usePushNotifications();

	if (!restaurant) return <Navigate to="/login" />;

	return (
		<>
			<Layout style={{ minHeight: "100vh" }}>
				<Sider style={{ height: "100vh", overflow: "auto" }}>
					<Menu theme="dark" mode="inline" items={dashboardMenuItems} selectedKeys={[currentPathName]} />
				</Sider>
				<Layout className="relative flex justify-end">
					<Header className="absolute w-full top-0">
						<DashboardHeader />
					</Header>
					<div className="dashboard-layout">
						<Outlet />
					</div>
				</Layout>
			</Layout>
			<NotificationInfoModal onCloseModal={onCloseNotificationMessage} showModal={showNotificationMessage} />
		</>
	);
}
