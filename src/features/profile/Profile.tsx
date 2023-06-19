import { Tabs, TabsProps } from "antd";
import React from "react";

import PageWrapper from "../../components/PageWrapper";
import UserProfile from "./AdminProfile";
import RestaurantProfile from "./RestaurantProfile/RestaurantProfile";

export default function Profile() {
	return (
		<PageWrapper title="Profile" subtitle="Edit your profile details">
			<Tabs defaultActiveKey="1" items={items} />
		</PageWrapper>
	);
}

const items: TabsProps["items"] = [
	{
		key: "1",
		label: `Restaurant Profile`,
		children: <RestaurantProfile />,
	},
	{
		key: "2",
		label: `User Profile`,
		children: <UserProfile />,
	},
];
