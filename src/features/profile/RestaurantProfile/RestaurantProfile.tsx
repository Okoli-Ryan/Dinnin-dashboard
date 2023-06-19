import { Form } from "antd";
import React from "react";
import { AiOutlinePlus } from "react-icons/ai";

import { Button, TextInput, UploadImage } from "../../../components";
import PhoneInput from "../../../components/formComponents/PhoneInput";
import CoordinatePickerModal from "./components/CoordinatePickerModal";
import useRestaurantProfile from "./useRestaurantProfile";

export default function RestaurantProfile() {
	const { form, isOpen, onClose, onOpen, updateRestaurantProfile, isLoading, initialValues } = useRestaurantProfile();
	return (
		<div className="flex flex-col justify-center max-w-xl gap-4 ">
			<Form layout="vertical" form={form} onFinish={updateRestaurantProfile} initialValues={initialValues}>
				<CoordinatePickerModal isOpen={isOpen} onClose={onClose} />
				<UploadImage folderName="restaurant_url" name="logoUrl" />
				<TextInput name="restaurantName" label="Restaurant name" rules={[{ required: true, message: "Please add the name of the restaurant" }]} />
				<TextInput name="contactEmail" label="contact email" rules={[{ type: "email" }, { required: true }]} />
				<PhoneInput name="contactPhoneNumber" isRequired />
				<TextInput name="address" label="Address" />
				<TextInput name="city" label="City" rules={[{ required: true, message: "Please add the city name" }]} />
				<TextInput name="state" label="State" rules={[{ required: true, message: "Please add the state" }]} />
				<TextInput name="country" label="Country" rules={[{ required: true, message: "Please add the country" }]} />
				<div className="grid grid-cols-2 gap-4">
					<TextInput name="xCoordinate" inputProps={{ disabled: true, value: form.getFieldValue("xCoordinate") }} label="x-Coordinate" />
					<TextInput name="yCoordinate" inputProps={{ disabled: true, value: form.getFieldValue("yCoordinate") }} label="y-Coordinate" />
				</div>
				<Button.Outline className="mb-4" icon={<AiOutlinePlus />} onClick={onOpen}>
					Set Restaurant Coordinates
				</Button.Outline>
				<TextInput.TextArea name="description" label="Description" />
				<Button block type="primary" htmlType="submit" loading={isLoading}>
					Edit Restaurant Details
				</Button>
			</Form>
		</div>
	);
}
