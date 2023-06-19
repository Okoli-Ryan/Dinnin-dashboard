import React from "react";

import * as LoadingAnim from "../assets/lottieAnimations/FoodLoading.json";
import Lottie from "./Lottie";

export default function LoadingComponent() {
	return (
		<div className="h-full justify-center items-center flex">
			<Lottie data={LoadingAnim} />
		</div>
	);
}
