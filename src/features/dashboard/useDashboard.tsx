import { MenuProps } from "antd";
import React, { useState } from "react";
import { matchPath, useLocation, useNavigate } from "react-router-dom";

import { useAppSelector } from "../../store";

export default function useDashboard() {
	const restaurant = useAppSelector((state) => state.restaurant);
	const navigate = useNavigate();
	const { pathname } = useLocation();
	const currentPathName = pathname.substring(1);

	const onSelectRoute: MenuProps["onClick"] = (e) => {
		navigate(e.key);
	};

	return { onSelectRoute, restaurant, currentPathName };
}
