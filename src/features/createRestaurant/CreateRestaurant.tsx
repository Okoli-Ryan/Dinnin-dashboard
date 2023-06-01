import { Form, Space } from "antd";
import React from "react";
import { Navigate } from "react-router-dom";

import { Button, TextInput } from "../../components";
import { withFadeIn } from "../../hoc";
import useCreateRestaurant from "./useCreateRestaurant";

function CreateRestaurant() {
	const { form, checkIfSlugExists, siteOriginName, onSubmit, isSlugValid, isSlugValidating, admin, isLoading } = useCreateRestaurant();

	if (!admin) {
		return <Navigate replace to="/login" />;
	}

	if (admin?.restaurant) return <Navigate replace to="/" />;

	return (
		<>
			<h3 className="text-3xl font-bold text-center">Create your restaurant</h3>
			<div className="flex flex-col justify-center gap-4 mt-4">
				<Form layout="vertical" form={form} onFinish={onSubmit}>
					<TextInput
						name="restaurantName"
						label="Restaurant name"
						placeholder="HappyTimes Dine-in"
						rules={[{ required: true, message: "Please set a restaurant name" }]}
					/>
					<TextInput
						name="slug"
						label="Restaurant slug"
						validateTrigger={["onBlur"]}
						rules={[{ required: true, message: "Please add a restaurant slug" }, { validator: checkIfSlugExists }]}
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
					<Button block htmlType="submit" disabled={!isSlugValid} type="primary" loading={isSlugValidating || isLoading}>
						Get Started
					</Button>
				</Form>
			</div>
		</>
	);
}

export default withFadeIn(CreateRestaurant);
