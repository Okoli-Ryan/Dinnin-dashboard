import { message } from "antd";
import { useForm } from "antd/es/form/Form";
import { useNavigate } from "react-router-dom";

import { IError } from "../../../../interfaces/IError";
import { ErrorResponse } from "../../../../models/Error/ErrorResponse";
import { useLoginMutation } from "../../../../services/Admin.api";
import { AuthScreenOutletContext } from "../../AuthScreen";

export default function useLogin() {
	const [form] = useForm();
	const navigate = useNavigate();
	const { setShowVerificationNote } = AuthScreenOutletContext();
	const [login, { isLoading }] = useLoginMutation();

	function navigateToSignup() {
		navigate("/signup");
	}

	async function onSubmit() {
		try {
			const response = await login(form.getFieldsValue()).unwrap();

			if (response.admin.restaurant === null) {
				navigate("/create");
			}
		} catch (error: any) {
			const errorResponse = new ErrorResponse(error);

			//User was authenticated but has not been confirmed
			if (errorResponse.status === 401) {
				setShowVerificationNote(true);
				return;
			}

			message.error(errorResponse.message);
		}
	}

	return { form, navigateToSignup, onSubmit, isLoading };
}
