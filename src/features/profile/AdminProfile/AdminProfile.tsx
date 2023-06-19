import { Form } from "antd";
import React from "react";

import { Button, TextInput } from "../../../components";
import PhoneInput from "../../../components/formComponents/PhoneInput";
import PageWrapper from "../../../components/PageWrapper";
import useUserProfile from "./useAdminProfile";

export default function AdminProfile() {
	const { form, updateAdmin, isLoading } = useUserProfile();
	return (
		<div className="flex flex-col justify-center max-w-xl gap-4 ">
			<Form layout="vertical" form={form} onFinish={updateAdmin}>
				<TextInput name="firstName" label="First name" rules={[{ required: true, message: "Please enter your first name" }]} />
				<TextInput name="lastName" label="Last name" rules={[{ required: true, message: "Please enter your last name" }]} />
				<PhoneInput name="phoneNumber" isRequired />
				{/* <TextInput name="emailAddress" label="Email address" rules={[{ type: "email" }, { required: true }]} /> */}
				<Button block type="primary" htmlType="submit" loading={isLoading}>
					Edit Profile
				</Button>
			</Form>
		</div>
	);
}
