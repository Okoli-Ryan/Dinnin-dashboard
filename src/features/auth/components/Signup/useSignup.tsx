import { Form, FormInstance, message } from "antd";
import React, { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";

import { useCreateAdminMutation } from "../../../../api/Admin.api";
import { ErrorResponse } from "../../../../models/Error/ErrorResponse";
import { AuthScreenOutletContext, IAuthScreenOutletContext } from "../../AuthScreen";

export default function useSignup() {
	const [loading, setLoading] = useState(false);

	const [form] = Form.useForm();
	const navigate = useNavigate();
	const [createAdmin] = useCreateAdminMutation();
	const { setShowVerificationNote } = AuthScreenOutletContext()
	Form.useWatch("phoneNumber", { form, preserve: true });

	const validateConfirmPassword = ({ getFieldValue }: IValidateConfirmPasswordProps) => ({
		validator(_: any, value: string) {
			if (!value || getFieldValue("password") === value) {
				return Promise.resolve();
			}
			return Promise.reject(new Error("The two passwords that you entered do not match!"));
		},
	});

	function navigateToLogin() {
		navigate("/login");
	}

	async function onSubmit() {
		try {
			const values = form.getFieldsValue();
			setLoading(true);
			await form.validateFields();
			await createAdmin(values).unwrap();

			setShowVerificationNote(true);
		} catch (error: any) {
			const errorResponse = new ErrorResponse(error);

			message.error(errorResponse.message);
		} finally {
			setLoading(false);
		}
	}

	return { form, onSubmit, loading, validateConfirmPassword, navigateToLogin };
}

interface IValidateConfirmPasswordProps {
	getFieldValue: FormInstance<any>["getFieldValue"];
}
