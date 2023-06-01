import { Form, message } from "antd";
import { FormInstance, useForm } from "antd/es/form/Form";
import React, { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";

import { ErrorResponse } from "../../../../models/Error/ErrorResponse";
import { useCreateAdminMutation } from "../../../../services/Admin.api";
import { IAuthScreenOutletContext } from "../../AuthScreen";

export default function useSignup() {
	const [loading, setLoading] = useState(false);

	const [form] = useForm();
	const navigate = useNavigate();
	const [createAdmin] = useCreateAdminMutation();
	const { setShowVerificationNote } = useOutletContext<IAuthScreenOutletContext>();
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
