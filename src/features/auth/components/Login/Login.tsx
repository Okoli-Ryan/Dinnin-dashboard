import { Form } from "antd";

import { Button, TextInput } from "../../../../components";
import { withFadeIn } from "../../../../hoc";
import useLogin from "./useLogin";

function Login() {
	const { form } = useLogin();

	return (
		<Form form={form} layout="vertical">
			<h3 className="text-center font-bold text-3xl"> Welcome back</h3>
			<p className="text-center text-gray-500">We're glad to have you back</p>
			<div className="flex flex-col gap-4 mt-4  justify-center">
				<TextInput name="email" rules={[{ type: "email" }]} className="rounded-none" />
				<TextInput.Password name="password" className="rounded-none" />
				<Button size="large" type="primary" htmlType="submit">
					Sign In
				</Button>
			</div>
		</Form>
	);
}

export default withFadeIn(Login);
