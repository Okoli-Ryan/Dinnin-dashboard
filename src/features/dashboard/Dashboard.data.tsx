import "./Dashboard.style.css";

import { MenuProps } from "antd";
import { FaUserAlt } from "react-icons/fa";
import { IoFastFoodSharp } from "react-icons/io5";
import { MdMenuBook, MdRestaurantMenu } from "react-icons/md";
import { NavLink } from "react-router-dom";

import { getItem } from "./components/Dashboard.utils";

export type MenuItem = Required<MenuProps>["items"][number];

export const dashboardMenuItems = [
	getItem("Orders", "orders", <MdRestaurantMenu />),
	getItem("Profile", "profile", <FaUserAlt />),
	getItem("Menu", "menu", <MdMenuBook />),
	// getItem("User", "2", <AiFillAppstore />, [getItem("Tom"), getItem("Bill"), getItem("Alex")]),
];
