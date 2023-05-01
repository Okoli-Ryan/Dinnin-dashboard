import React from "react";
import { useNavigate } from "react-router-dom";

import { useAppSelector } from "../../store";

export default function useDashboard() {
	const admin = useAppSelector((state) => state.admin);

	return { restaurant: admin?.restaurant };
}
