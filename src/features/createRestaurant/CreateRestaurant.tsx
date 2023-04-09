import { Form, Space } from "antd";
import React from "react";

import { Button, TextInput } from "../../components";
import { withFadeIn } from "../../hoc";
import useCreateRestaurant from "./useCreateRestaurant";

function CreateRestaurant() {
	// const { form, onSubmit, previousStep, validateConfirmPassword, loading } = useSignupStepTwo();
	const { form, isSlugAvailable, siteOriginName, onSubmit, loading } = useCreateRestaurant();

	return (
		<>
			<h3 className="text-center font-bold text-3xl">Create your restaurant</h3>
			<div className="flex flex-col gap-4 mt-4  justify-center">
				<Form layout="vertical" form={form} onFinish={onSubmit}>
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
					<Button block htmlType="submit" type="primary" loading={loading || form.isFieldsValidating(["slug"])}>
						Get Started
					</Button>
				</Form>
			</div>
		</>
	);
}

export default withFadeIn(CreateRestaurant);
