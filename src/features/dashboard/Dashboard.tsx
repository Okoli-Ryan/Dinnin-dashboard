import React from "react";
import { Navigate } from "react-router-dom";

import useDashboard from "./useDashboard";

export default function Dashboard() {
	const { restaurant } = useDashboard();

	if (!restaurant) return <Navigate to="/login" />;

	return <div>Dashboard</div>;
}
