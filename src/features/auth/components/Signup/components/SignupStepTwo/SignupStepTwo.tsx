import { Form, Space } from 'antd';
import React from 'react';

import { Button, TextInput } from '../../../../../../components';
import useSignupStepTwo from './useSignupStepTwo';

export default function SignupStepTwo() {
	const { form, onSubmit, previousStep, validateConfirmPassword, loading } = useSignupStepTwo();

	return (
		<>
			<div className="grid grid-cols-2 gap-2">
				<TextInput name="firstName" label="First name" rules={[{ required: true, message: "Please add the first name of the restaurant owner" }]} />
				<TextInput name="lastName" label="Last name" rules={[{ required: true, message: "Please add the last name of the restaurant owner" }]} />
			</div>
			<TextInput name="email" label="Email address" rules={[{ type: "email" }, { required: true }]} />
			<TextInput.Password name="password" rules={[{ required: true, message: "Please add a Password" }, { min: 8 }]} />
			<TextInput.Password
				label="Confirm Password"
				dependencies={["password"]}
				name="confirmPassword"
				rules={[{ required: true, message: "Please add a Password" }, validateConfirmPassword]}
			/>

			<Button.Outline onClick={previousStep}>Previous</Button.Outline>
			<Button block type="primary" htmlType="submit" loading={loading} className="mt-4">
				Sign up
			</Button>
		</>
	);
}
