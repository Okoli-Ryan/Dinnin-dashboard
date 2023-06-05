import { useForm } from "antd/es/form/Form";
import React from "react";

export default function useProfile() {
	const [form] = useForm();

	return { form };
}
