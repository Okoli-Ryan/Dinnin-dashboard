import { useForm } from 'antd/es/form/Form';
import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

import { reportErrorMessage } from "../../core/Utils";
import { RestaurantApi, useCreateRestaurantMutation, useLazyDoesSlugExistQuery } from "../../services/Restaurant.api";
import { useAppDispatch, useAppSelector } from '../../store';

const siteOriginName = window.location.origin + "/";

export default function useCreateRestaurant() {
	const [form] = useForm();
	const dispatch = useAppDispatch();
	const admin = useAppSelector((state) => state.admin);
	const [doesSlugExist, { isLoading: isSlugValidating }] = useLazyDoesSlugExistQuery();
	const [isSlugValid, setIsSlugValid] = useState(false);
	const [createRestaurant, { isLoading }] = useCreateRestaurantMutation();

	async function onSubmit() {
		try {
			const values = form.getFieldsValue();

			const payload = { ...values, contactPhoneNumber: admin?.phoneNumber, contactEmail: admin?.emailAddress };

			await createRestaurant(payload).unwrap();
		} catch (error) {
			console.log(error);
			reportErrorMessage(error);
		} finally {
		}
	}

	const checkIfSlugExists = async (rule: any, value: string) => {
		if (!value) return;

		try {
			const response = await doesSlugExist(value).unwrap();
			console.log({ response });
			setIsSlugValid(!response);

			if (response) throw new Error("Slug already exists");

			return;
		} catch (error: any) {
			reportErrorMessage(null, "Slug already exists");
			throw new Error(error.message);
		}
	};

	return {
		form,
		onSubmit,
		admin,
		siteOriginName,
		isLoading,
		checkIfSlugExists,
		isSlugValid,
		isSlugValidating,
		doesSlugExist,
	};
}
