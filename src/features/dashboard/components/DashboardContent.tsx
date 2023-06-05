import { Layout } from "antd";
import React from "react";
import { Outlet } from "react-router-dom";

const { Header, Content, Footer, Sider } = Layout;

export default function DashboardContent() {
	return (
		<Content>
			<Outlet />
		</Content>
	);
}
