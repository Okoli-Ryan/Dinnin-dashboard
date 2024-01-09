import { MenuProps } from "antd";
import { FaUserAlt } from "react-icons/fa";
import { MdMenuBook, MdOutlineBarChart, MdOutlineTableRestaurant, MdRestaurantMenu } from "react-icons/md";

import { getItem } from "./components/Dashboard.utils";

export type SideMenuItem = Required<MenuProps>["items"][number];

export const dashboardMenuItems = [
	getItem("Orders", "orders", <MdRestaurantMenu />),
	getItem("Analytics", "analytics", <MdOutlineBarChart />),
	getItem("Menu", "menu", <MdMenuBook />),
	getItem("Tables", "table", <MdOutlineTableRestaurant />),
	getItem("Profile", "profile", <FaUserAlt />),
];
