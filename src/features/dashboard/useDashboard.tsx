import { MenuProps } from "antd";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useAppSelector } from "../../store";

export default function useDashboard() {
	// const admin = useAppSelector((state) => state.admin);
	const navigate = useNavigate();

	const onSelectRoute: MenuProps["onClick"] = (e) => {
		navigate(e.key);
	};

	return { onSelectRoute };
}
