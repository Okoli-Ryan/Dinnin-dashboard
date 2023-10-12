import { Form, message } from "antd";
import { useNavigate } from "react-router-dom";

import { useLoginMutation } from "@api/AdminApi/Admin.api";
import { ErrorResponse } from "@models/Error/ErrorResponse";

import { AuthScreenOutletContext } from "../../AuthScreen";
import { reportErrorMessage } from "@/core/Utils";

export default function useLogin() {
	const [form] = Form.useForm();
	const navigate = useNavigate();
	const { setShowVerificationNote } = AuthScreenOutletContext();
	const [login, { isLoading }] = useLoginMutation();

	function navigateToSignup() {
		navigate("/signup");
	}

	async function onSubmit() {
		try {
			const admin = await login(form.getFieldsValue()).unwrap();

			if (admin.restaurant === null) {
				navigate("/create");
				return;
			}

			navigate("/");
		} catch (error: any) {
			
			const errorResponse = new ErrorResponse(error);

			//User was authenticated but has not been confirmed
			if (errorResponse.status === 401) {
				setShowVerificationNote(true);
				return;
			}

			reportErrorMessage(error);
		}
	}

	return { form, navigateToSignup, onSubmit, isLoading };
}
