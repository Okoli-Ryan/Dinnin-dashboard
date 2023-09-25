import "./Dashboard.style.css";

import { MenuProps } from "antd";
import { FaUserAlt } from "react-icons/fa";
import { IoFastFoodSharp } from "react-icons/io5";
import { MdMenuBook, MdOutlineTableRestaurant, MdRestaurantMenu } from "react-icons/md";
import { NavLink } from "react-router-dom";

import { getItem } from "./components/Dashboard.utils";

export type SideMenuItem = Required<MenuProps>["items"][number];

export const dashboardMenuItems = [
	getItem("Orders", "orders", <MdRestaurantMenu />),
	getItem("Menu", "menu", <MdMenuBook />),
	getItem("Tables", "table", <MdOutlineTableRestaurant />),
	getItem("Profile", "profile", <FaUserAlt />),
];
