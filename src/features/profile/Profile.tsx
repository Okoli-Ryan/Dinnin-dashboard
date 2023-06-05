import { Form } from "antd";
import React from "react";

import { Button, TextInput } from "../../components";
import PageWrapper from "../../components/PageWrapper";
import PhoneInput from "../../components/PhoneInput";
import useProfile from "./useProfile";

export default function Profile() {
	const { form } = useProfile();
	return (
		<PageWrapper title="Profile" subtitle="Edit your profile details">
			<div className="flex flex-col justify-center max-w-xl gap-4 ">
				<Form layout="vertical">
					<TextInput name="firstName" label="First name" rules={[{ required: true, message: "Please add the first name of the restaurant owner" }]} />
					<TextInput name="lastName" label="Last name" rules={[{ required: true, message: "Please add the last name of the restaurant owner" }]} />
					<PhoneInput
						name="phoneNumber"
						isRequired
						value={form.getFieldValue("phoneNumber")}
						onChange={(e) => form.setFieldsValue({ phoneNumber: e })}
					/>
					<TextInput name="emailAddress" label="Email address" rules={[{ type: "email" }, { required: true }]} />

					<Button block type="primary" htmlType="submit">
						Edit Profile
					</Button>
				</Form>
			</div>
		</PageWrapper>
	);
}
