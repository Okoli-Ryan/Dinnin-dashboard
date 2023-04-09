import { useForm } from "antd/es/form/Form";
import React, { useState } from "react";

const siteOriginName = window.location.origin + "/";

export default function useCreateRestaurant() {
	const [form] = useForm();
	const [loading, setLoading] = useState(false);

	async function onSubmit() {
		try {
			setLoading(true);
		} catch (error) {
		} finally {
			setLoading(false);
		}
	}

	const isSlugAvailable = async (rule: any, value: string) => {
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

	return { form };
}
