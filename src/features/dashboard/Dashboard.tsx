import { Layout, Menu } from "antd";
import React, { memo, useMemo, useState } from "react";
import { Navigate, NavLink, Outlet } from "react-router-dom";

import { DashboardHeader } from "./components";
import DashboardContent from "./components/DashboardContent";
import { dashboardMenuItems } from "./Dashboard.data";
import useDashboard from "./useDashboard";

const { Header, Content, Footer, Sider } = Layout;

export default function Dashboard() {
	const { onSelectRoute } = useDashboard();

	// if (!restaurant) return <Navigate to="/login" />;

	return (
		<Layout style={{ minHeight: "100vh" }}>
			<Sider>
				<Menu theme="dark" mode="inline" items={dashboardMenuItems} />
			</Sider>
			<Layout>
				<Header>
					<DashboardHeader />
				</Header>
				<Outlet />
			</Layout>
		</Layout>
	);
}
