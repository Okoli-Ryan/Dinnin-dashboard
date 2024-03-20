import { Form } from 'antd';

import { Button, TextInput } from "@/components";
import { withFadeIn } from "@/hoc";

import useLogin from './useLogin';

function Login() {
	const { form, navigateToSignup, onSubmit, isLoading, onLoginWithDemoCredentials } = useLogin();

	return (
		<>
			<Form form={form} layout="vertical" onFinish={onSubmit}>
				<h3 className="text-3xl font-bold text-center"> Welcome back</h3>
				<p className="text-center text-gray-500">We're glad to have you back</p>
				<div className="flex flex-col justify-center mt-4">
					<TextInput label="Email" name="email" rules={[{ type: "email" }]} className="rounded-none" />
					<TextInput.Password label="Password" name="password" className="rounded-none" />
					<Button size="large" type="primary" htmlType="submit" loading={isLoading}>
						Sign In
					</Button>
					<Button.Outline className="mt-4" onClick={onLoginWithDemoCredentials} size="large">
						Sign In with Test Account
					</Button.Outline>
				</div>
			</Form>
			<p className="mt-4 text-center">
				Don't have an account? <Button.Text onClick={navigateToSignup}>Sign Up</Button.Text>
			</p>
		</>
	);
}

export default withFadeIn(Login);
