import { Form, Space } from 'antd';
import React from 'react';

import { Button, TextInput } from '../../../../../components';
import { useSignupContext } from '../../context/SignupContext';
import useSignupStepOne from './useSignupStepOne';

export default function SignupStepOne() {
	const { form, onSubmit, isSlugAvailable, loading, siteOriginName, formValues } = useSignupStepOne();

	return (
		<Form layout="vertical" form={form} onFinish={onSubmit} noValidate initialValues={formValues}>
			<TextInput
				name="name"
				label="Restaurant name"
				placeholder="HappyTimes Dine-in"
				rules={[{ required: true, message: "Please set a restaurant name" }]}
			/>
			<TextInput
				name="slug"
				label="Restaurant slug"
				rules={[
					{ required: true, message: "Please add a restaurant slug" },
					{ validator: isSlugAvailable, validateTrigger: [] },
				]}
				inputProps={{
					addonBefore: siteOriginName,
				}}
			/>
			<TextInput name="address" rules={[{ required: true }]} />

			<Space>
				<TextInput name="city" rules={[{ required: true }]} />
				<TextInput name="state" rules={[{ required: true }]} />
			</Space>

			<TextInput name="country" rules={[{ required: true }]} />
			<Button.Outline type="primary" htmlType="submit" loading={loading || form.isFieldsValidating(["slug"])}>
				Next
			</Button.Outline>
		</Form>
	);
}
