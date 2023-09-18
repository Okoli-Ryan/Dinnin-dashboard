import Lottie from "@components/Lottie";

import * as LoadingAnim from "../../../../assets/lottieAnimations/FoodLoading.json";
import SuccessfulVerification from "./components";
import useVerificationScreen from "./useVerificationScreen";

export default function VerificationScreen() {
	const { isError, isLoading, error } = useVerificationScreen();

	if (isLoading)
		return (
			<div className="flex items-center justify-center w-full h-screen">
				<Lottie data={LoadingAnim} />
			</div>
		);

	if (isError) {
		return <div className="flex items-center justify-center w-full h-screen text-2xl font-bold">{error.message}</div>;
	}

	return <SuccessfulVerification />;
}
