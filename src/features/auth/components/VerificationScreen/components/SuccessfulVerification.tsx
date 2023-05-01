import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function SuccessfulVerification() {
	const navigate = useNavigate();

	useEffect(() => {
		setTimeout(() => {
			navigate("/login");
		}, 2000);
	}, []);

	return <div className="flex items-center justify-center w-full h-screen text-2xl font-bold">Verification was successful</div>;
}
