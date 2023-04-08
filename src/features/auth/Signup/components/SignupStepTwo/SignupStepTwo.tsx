import { Form, Space } from 'antd';
import React from 'react';

import { Button, TextInput } from '../../../../../components';
import useSignupStepTwo from './useSignupStepTwo';

export default function SignupStepTwo() {
	const { form, onSubmit, goToPreviousStep, loading, formValues } = useSignupStepTwo();

	return (
		<Form layout="vertical" form={form} onFinish={onSubmit} noValidate initialValues={formValues}>
			<Space>
				<TextInput name="firstName" label="First name" rules={[{ required: true, message: "Please add the first name of the restaurant owner" }]} />
				<TextInput name="lastName" label="Last name" rules={[{ required: true, message: "Please add the name of the restaurant owner" }]} />
			</Space>
			<TextInput.Password name="password" rules={[{ required: true, message: "Please add a Password" }, { min: 8 }]} />

			<Button.Outline onClick={goToPreviousStep}>
				Previous
			</Button.Outline>
			<Button block type="primary" htmlType="submit" loading={loading} className="mt-4">
				Sign up
			</Button>
		</Form>
	);
}
