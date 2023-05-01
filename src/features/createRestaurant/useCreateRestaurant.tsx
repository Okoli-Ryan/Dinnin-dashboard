import { useForm } from 'antd/es/form/Form';
import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

import { RestaurantApi, useDoesSlugExistMutation } from '../../services/Restaurant.api';
import { useAppDispatch, useAppSelector } from '../../store';

const siteOriginName = window.location.origin + "/";

export default function useCreateRestaurant() {
	const [form] = useForm();
	const dispatch = useAppDispatch();
	const admin = useAppSelector((state) => state.admin);
	const [doesSlugExist] = useDoesSlugExistMutation();
	const [loading, setLoading] = useState(false);

	async function onSubmit() {
		try {
			setLoading(true);
		} catch (error) {
		} finally {
			setLoading(false);
		}
	}

	const checkIfSlugExists = async (rule: any, value: string) => {
		if (!value) return;

		try {
			const response = await doesSlugExist(value).unwrap();

			if (response) throw new Error("Slug already exists");

			return;
		} catch (error: any) {
			throw new Error(error.message);
		}
	};

	return {
		form,
		onSubmit,
		admin,
		siteOriginName,
		loading,
		checkIfSlugExists,
		doesSlugExist,
	};
}
