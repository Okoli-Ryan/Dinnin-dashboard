import { Form, Space } from 'antd';
import React from 'react';

import { Button, TextInput } from '../../../../../../components';
import useSignupStepOne from './useSignupStepOne';

export default function SignupStepOne() {
	const { form, onSubmit, isSlugAvailable, loading, siteOriginName } = useSignupStepOne();

	return (
		<>
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

			<div className="grid grid-cols-2 gap-2">
				<TextInput name="city" rules={[{ required: true }]} />
				<TextInput name="state" rules={[{ required: true }]} />
			</div>

			<TextInput name="country" rules={[{ required: true }]} />
			<Button.Outline onClick={onSubmit} type="primary" loading={loading || form.isFieldsValidating(["slug"])}>
				Next
			</Button.Outline>
		</>
	);
}
