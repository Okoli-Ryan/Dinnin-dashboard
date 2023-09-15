import { Form, Space } from "antd";
import React from "react";

import { Button, TextInput } from "../../../../components";
import PhoneInput from "../../../../components/formComponents/PhoneInput";
import { withFadeIn } from "../../../../hoc";
import useSignupStepTwo from "./useSignup";

function Signup() {
	const { form, onSubmit, validateConfirmPassword, loading, navigateToLogin } = useSignupStepTwo();

	return (
		<>
			<h3 className="text-3xl font-bold text-center">Sign up today.</h3>

			<div className="flex flex-col justify-center gap-4 mt-4">
				<Form layout="vertical" form={form} onFinish={onSubmit}>
					<div className="grid grid-cols-2 gap-2">
						<TextInput
							name="firstName"
							label="First name"
							rules={[{ required: true, message: "Please add the first name of the restaurant owner" }]}
						/>
						<TextInput
							name="lastName"
							label="Last name"
							rules={[{ required: true, message: "Please add the last name of the restaurant owner" }]}
						/>
					</div>
					<PhoneInput name="phoneNumber" isRequired />
					<TextInput name="emailAddress" label="Email address" rules={[{ type: "email" }, { required: true }]} />
					<TextInput.Password label="Password" name="password" rules={[{ required: true, message: "Please add a Password" }, { min: 8 }]} />
					<TextInput.Password
						label="Confirm Password"
						dependencies={["password"]}
						name="confirmPassword"
						rules={[{ required: true, message: "Please add a Password" }, validateConfirmPassword]}
					/>

					<Button className="w-full" type="primary" htmlType="submit" loading={loading}>
						Sign up
					</Button>
				</Form>
			</div>
			<p className="mt-4 text-center">
				Already have an account? <Button.Text onClick={navigateToLogin}>Log in</Button.Text>
			</p>
		</>
	);
}

export default withFadeIn(Signup);
