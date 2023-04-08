import { FormInstance, useForm } from "antd/es/form/Form";
import React, { useState } from "react";

import { useSignupContext } from "../../context/SignupContext";

export default function useSignupStepTwo() {
	const [loading, setLoading] = useState(false);
	const { previousStep, changeFormValues, form } = useSignupContext();

	const validateConfirmPassword = ({ getFieldValue }: { getFieldValue: FormInstance<any>["getFieldValue"] }) => ({
		validator(_: any, value: string) {
			if (!value || getFieldValue("password") === value) {
				return Promise.resolve();
			}
			return Promise.reject(new Error("The two passwords that you entered do not match!"));
		},
	});

	async function onSubmit() {
		try {
			setLoading(true);
			await form.validateFields();
		} catch (error) {
		} finally {
			setLoading(false);
		}
	}

	return { form, onSubmit, previousStep, loading, validateConfirmPassword };
}
