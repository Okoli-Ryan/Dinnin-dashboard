import { useForm } from 'antd/es/form/Form';
import React from 'react';

import { useGetTablesQuery, useSaveTableMutation, useUpdateTableMutation } from '@/api/Table.api';
import { reportErrorMessage } from '@/core/Utils';
import { useAppSelector } from '@/store';

import { ITableModal } from './TableModal';

export default function useTableModal({ onAddSuccess, onEditSuccess, selectedTable, onCloseModal }: ITableModal) {
	const { id: restaurantId } = useAppSelector((state) => state.restaurant)!;
	const [saveTable, { isLoading: isSaveTableLoading }] = useSaveTableMutation();
	const [updateTable, { isLoading: isEditTableLoading }] = useUpdateTableMutation();

	const inEditMode = !!selectedTable?.id;
	const isOpen = !!selectedTable;

	const [form] = useForm();

	async function addTable() {
		try {
			const payload = form.getFieldsValue();
			const response = await saveTable({ ...payload, restaurantId }).unwrap();
			onAddSuccess(response);
			onCloseModal();
		} catch (error) {
			reportErrorMessage(error, "Unable to save table");
		}
	}

	async function editTable() {
		try {
			const payload = form.getFieldsValue();
			const response = await updateTable({ ...selectedTable, ...payload, restaurantId }).unwrap();
			onEditSuccess(response);
			onCloseModal();
		} catch (error) {
			reportErrorMessage(error, "Unable to edit table");
		}
	}

	async function onFinish() {
		if (inEditMode) {
			await editTable();
		} else {
			await addTable();
		}
	}

	return { addTable, editTable, isOpen, form, isLoading: isEditTableLoading || isSaveTableLoading, inEditMode, onFinish };
}
