import { useForm } from "antd/es/form/Form";
import React from "react";

import { useUpdateRestaurantMutation } from "../../../api/Restaurant.api";
import { reportErrorMessage } from "../../../core/Utils";
import useDisclose from "../../../hooks/useDisclose";
import { IRestaurant } from "../../../models";
import { useAppSelector } from "../../../store";

export default function useRestaurantProfile() {
	const [form] = useForm();
	const { isOpen, onClose, onOpen } = useDisclose();
	const restaurant = useAppSelector((state) => state.restaurant) as IRestaurant;
	const [updateRestaurant, { isLoading }] = useUpdateRestaurantMutation();

	async function updateRestaurantProfile() {
		const payload = { ...form.getFieldsValue(), id: restaurant.id };

		try {
			const response = await updateRestaurant(payload).unwrap();
			console.log({ response });
		} catch (error) {
			reportErrorMessage(error);
		}
	}

	return { form, isOpen, onClose, onOpen, updateRestaurantProfile, isLoading, initialValues: restaurant };
}
