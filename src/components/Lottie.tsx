import React from "react";
import LottieComponent from "react-lottie";

export default function Lottie({ data, size = 400 }: ILottie) {
	return <LottieComponent options={defaultOptions(data)} height={size} width={size} />;
}

interface ILottie {
	size?: number;
	data: any;
}

const defaultOptions = (data: any) => ({
	loop: true,
	autoplay: true,
	animationData: JSON.parse(JSON.stringify(data)),
	rendererSettings: {
		preserveAspectRatio: "xMidYMid slice",
	},
});
