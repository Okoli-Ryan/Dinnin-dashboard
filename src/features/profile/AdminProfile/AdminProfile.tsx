import { Form } from "antd";

import { Button, TextInput } from "../../../components";
import PhoneInput from "../../../components/formComponents/PhoneInput";
import useUserProfile from "./useAdminProfile";

export default function AdminProfile() {
	const { form, updateAdmin, isLoading, admin } = useUserProfile();
	return (
		<div className="flex flex-col justify-center max-w-xl gap-4 ">
			<Form layout="vertical" form={form} onFinish={updateAdmin} initialValues={admin}>
				<h3 className="mb-4 text-xl">
					Role: <span className="font-extrabold text-primary">{admin.position}</span>
				</h3>
				<TextInput name="firstName" label="First name" rules={[{ required: true, message: "Please enter your first name" }]} />
				<TextInput name="lastName" label="Last name" rules={[{ required: true, message: "Please enter your last name" }]} />
				{admin.role === "admin" && <TextInput name="emailAddress" label="User ID" disabled />}
				<TextInput name="recoveryEmail" label="Recovery Email" rules={[{ required: true, message: "Please enter your recovery email" }]} />
				<PhoneInput name="phoneNumber" isRequired />
				{/* <TextInput name="emailAddress" label="Email address" rules={[{ type: "email" }, { required: true }]} /> */}
				<Button block type="primary" htmlType="submit" loading={isLoading}>
					Edit Profile
				</Button>
			</Form>
		</div>
	);
}
