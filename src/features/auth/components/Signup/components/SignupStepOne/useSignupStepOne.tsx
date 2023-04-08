import { useState } from 'react';

import { useSignupContext } from '../../context/SignupContext';

const siteOriginName = window.location.origin + "/";

export default function useSignupStepOne() {
	const [loading, setLoading] = useState(false);
	const { nextStep, form } = useSignupContext();

	async function onSubmit() {
		try {
			setLoading(true);
			await form.validateFields();
			nextStep();
		} catch (error) {
		} finally {
			setLoading(false);
		}
	}

	const isSlugAvailable = async (rule: any, value: string) => {
		console.log("vla");
		if (value) {
			try {
				await new Promise<void>((resolve, reject) => {
					setTimeout(() => {
						if (value === "abc") {
							reject(new Error("Email already exists"));
						} else {
							resolve();
						}
					}, 3000);
				});
			} catch (error: any) {
				throw new Error(error.message);
			}
		}
	};

	return {
		form,
		onSubmit,
		siteOriginName,
		loading,
		isSlugAvailable,
	};
}
